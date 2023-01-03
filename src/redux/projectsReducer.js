const initialState = {
    projects: [
        {
            name: 'Пицца-сайт',
            desctiption: 'Веб-приложение, которое было разработано на основе библиотеки Material UI. Имеется некоторый функционал, как на многих других сайтах.',
            src: 'https://Beaster1332.github.io/React-pizza'
        },
        {
            name: 'Поисковик кино',
            desctiption: 'Приложение, основанное на неофициальном API портала Кинопоиск. На данном сайте можно найти фильм, который есть в базе Кинопоиска.',
            src: 'https://Beaster1332.github.io/Movie-searcher'
        }
    ]
};

let projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default projectsReducer;