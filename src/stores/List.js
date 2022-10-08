import { defineStore } from "pinia";
import { supabase } from '../supabase/index'

export default defineStore("List", {
  state() {
    return {
        user : supabase.auth.user(),
            tasks: [],
            task : "",
            statuses : ["Pendiente", "En Progreso", "Terminada"],
            tasksList : [],
            editedTask : null,
    };
  },
  actions: {
    async CallData() {
      this.tasks = await supabase
        .from("tasks")
        .select("title, is_complete, id, inserted_at")
        .eq("user_id", this.user.id);
      this.tasksList = [];
      for (let i = 0; i < this.tasks.data.length; i++) {
        this.tasksList.push(this.tasks.data[i]);
      }
    },

    async submitTask() {
      if (this.task.length < 4) return alert("Ingresa más de 3 letras");
      //Acá se debe ingresar una alerta para tareas vacias.
      if (this.editedTask === null) {
        console.log(1);
        await supabase
          .from("tasks")
          .insert({
            title: this.task,
            /*id: this.tasksList.length,*/ user_id: this.user.id,
          });
        this.CallData();
        /*this.tasksList.push({
                    title: this.task,
                    is_complete: 0,
                    id: newTask.data.id});*/
      } else {
        this.tasksList[this.editedTask].title = this.task;
        this.editedTask = null;
        for (let i = 0; i < this.tasksList.length; ++i) {
          console.log(this.tasksList[i].id);
          await supabase
            .from("tasks")
            .update({ title: this.tasksList[i].title })
            .eq("id", this.tasksList[i].id);
        }
      }
      // To delete after add a new task
      this.task = "";
    },

    async deleteTask(index) {
      console.log(this.tasksList[index]);
      await supabase.from("tasks").delete().eq("id", this.tasksList[index].id);
      this.tasksList.splice(index, 1);
    },

    editTask(index) {
      this.task = this.tasksList[index].title;
      this.editedTask = index;
    },

    async changeStatus(index) {
      let newIndex = this.statuses.indexOf(this.tasksList[index].is_complete);
      if (++newIndex > 2) newIndex = 0;
      this.tasksList[index].is_complete = this.statuses[newIndex];
      await supabase
        .from("tasks")
        .update({ is_complete: this.statuses[newIndex] })
        .eq("id", this.tasksList[index].id);
      //this.CallData();
    },
  },
});
