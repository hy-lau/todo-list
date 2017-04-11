console.log('ready !');

new Vue({
	el: '#app',
	data: {
		taskList: [],
		newTask: '',
		checkedState: '',
	},
	computed: {
		checkButton: function () {
			if (this.checkedState === '') {
				return 'tout cocher';
			} else {
				return 'tout décocher';
			}
		}
	},
	methods: {
		ajouter: function () {
			if (this.newTask.length > 0) {
				this.taskList.push(this.newTask);
			} else {
				alert('Vous devez saisir une tâche !');
			}
			this.newTask = '';
		},
		supprimer: function (task) {
			let position = this.taskList.indexOf(task);
			this.taskList.splice(position, 1);

		},
		checkAll: function () {
			if (this.checkButton === 'tout cocher') {
				this.checkedState = 'checked';
				console.log('1st condition working');
				console.log(this.checkButton);
			} else if (this.checkButton === 'tout décocher') {
				console.log('2nd condition working')
				this.checkedState = '';
			}
		},
		test: function () {
			console.log('working!');
		}
	}

})
