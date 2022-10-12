import { defineStore } from "pinia";
import { supabase } from '../supabase/index'
import { store } from '../stores/store'
import { onMounted, ref } from 'vue'

export default defineStore("LogIn", {
  state() {
    return {
        user : supabase.auth.user(),
        loading : ref(false),
        username : ref(''),
        website : ref(''),
        avatar_url : ref(''),
    };
  },
  actions: {
            async getProfile() {
          try {
            this.loading = true
            store.user = supabase.auth.user()
  
            let { data, error, status } = await supabase
              .from('profiles')
              .select(`username, website, avatar_url`)
              .eq('id', store.user.id)
              .single()
  
            if (error && status !== 406) throw error
  
            if (data) {
              this.username = data.username
              this.website = data.website
              this.avatar_url = data.avatar_url
            }
          } catch (error) {
            swal(error.message)
          } finally {
            this.loading = false
          }
        },
  
        async  updateProfile() {
          try {
            this.loading = true
            store.user = supabase.auth.user()
  
            const updates = {
              id: store.user.id,
              username: this.username,
              website: this.website,
              avatar_url: this.avatar_url,
              updated_at: new Date(),
            }
  
            let { error } = await supabase.from('profiles').upsert(updates, {
              returning: 'minimal', // Don't return the value after inserting
            })
  
            if (error) throw error
          } catch (error) {
            swal(error.message)
          } finally {
            this.loading = false
          }
        },
  
        async  signOut() {
          try {
            this.loading = true
            console.log("Log Out 1")
            let { error } = await supabase.auth.signOut()
            if (error) throw error
          } catch (error) {
            console.log("Log Out 2")
            swal(error.message, "Haz cerrado sesión correctamente", "error")
          } finally {
            console.log("Log Out 3")
            this.loading = false
          }
        },    
  },
  

  },
);
