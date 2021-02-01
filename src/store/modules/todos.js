import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/todos';

const state = {
	todos: []
};

const getters = {
	allTodos: (state) => state.todos
};

const actions = {
	// Create.
	async buat({ commit }, title) {
		const response = await axios.post(
			baseUrl, { title, completed: false }
		);

		commit('baru', response.data);

		console.log('buat action.');
	},

	// Read.
	async ambil({ commit }) {
		const response = await axios.get(baseUrl);

		commit('tampilkan', response.data);
		
		console.log('ambil action.');
	},

	// Update.
	async update({ commit }, updTodo) {
		const response = await axios.put(`${baseUrl}/${updTodo.id}`, updTodo);

		commit('perbarui', response.data);
		
		console.log(`update action.`);
	},

	// Delete.
	async hapus({ commit }, id) {
		await axios.delete(`${baseUrl}/${id}`);
		commit('buang', id)
		
		console.log(`hapus action.`);
	},
};

const mutations = {
	tampilkan: (state, todos) => (state.todos = todos),
	baru: (state, todo) => state.todos.unshift(todo),
	buang: (state, id) => (state.todos = state.todos.filter(todo => todo.id !== id)),
	perbarui: (state, updTodo) => {
		const index = state.todos.findIndex(todo => todo.id === updTodo.id);
		
		if (index !== -1){
			state.todos.splice(index, 1, updTodo);
		}
	}
};

export default { state, getters, actions, mutations }