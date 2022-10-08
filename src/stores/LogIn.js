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
    async handleLogin() {
        try {
          this.loading.value = true
          const { error } = await supabase.auth.signIn({ email: email.value })
          if (error) throw error
          alert('Check your email for the login link!')
        } catch (error) {
          alert(error.error_description || error.message)
        } finally {
          this.loading.value = false
        }
      },
            async  getProfile() {
          try {
            loading.value = true
            store.user = supabase.auth.user()
  
            let { data, error, status } = await supabase
              .from('profiles')
              .select(`username, website, avatar_url`)
              .eq('id', store.user.id)
              .single()
  
            if (error && status !== 406) throw error
  
            if (data) {
              username.value = data.username
              website.value = data.website
              avatar_url.value = data.avatar_url
            }
          } catch (error) {
            alert(error.message)
          } finally {
            loading.value = false
          }
        },
  
        async  updateProfile() {
          try {
            loading.value = true
            store.user = supabase.auth.user()
  
            const updates = {
              id: store.user.id,
              username: username.value,
              website: website.value,
              avatar_url: avatar_url.value,
              updated_at: new Date(),
            }
  
            let { error } = await supabase.from('profiles').upsert(updates, {
              returning: 'minimal', // Don't return the value after inserting
            })
  
            if (error) throw error
          } catch (error) {
            alert(error.message)
          } finally {
            loading.value = false
          }
        },
  
        async  signOut() {
          try {
            loading.value = true
            let { error } = await supabase.auth.signOut()
            if (error) throw error
          } catch (error) {
            alert(error.message)
          } finally {
            loading.value = false
          }
        },
        
  },
  

  },
);
