import {defineStore} from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({

        tasks: [
            {id: 1, title: 'Task 1', isFav: false},
            {id: 2, title: 'Task 2', isFav: false},
        ]

    }), getters: {
        favs() {
            return this.tasks.filter(task => task.isFav)
        }, favCount() {
            return this.tasks.filter(task => task.isFav).length;
        },

        allCount() {
            return this.tasks.length;
        }
    }, actions: {
        setFav(value) {
            let task = this.tasks.find(task => task.id === value);
            task.isFav = !task.isFav;
        },
        removeTask(value) {
            this.tasks = this.tasks.filter(task => task.id !== value);
        },
        addTask(value) {
            this.tasks.push(value);
        }
    }
})

