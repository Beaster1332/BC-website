const initialState = {
    myInfo: 'Приветствую, меня зовут Иван Самойленко. На данный момент, я являюсь начинающим Frontend-разработчиком. Моё основательное обучение проходит с начала лета 2022 года. В период с этого времени мною было изучено несколько библиотек для языка JavaScript. Эти библиотеки включают в себя: React, Redux, React-Router-DOM, Material UI, React Hook Form и другие маленькие библиотеки. На данный момент, я занимаюсь разработкой свобственных пет-проектов для своего портфолио, которое Вы можете увидеть в данном веб-приложении. Также, сейчас я нахожусь в активном поиске работы, самое главное для меня - это начать активно развиваться на рабочем месте, так как я понимаю, что наилучшее обучение - это обучение на практике. Надеюсь, Вам понравится моя проделанная работа, которую я начал совсем недавно, но добился некоторых результатов за вышеупомянутый промежуток времени.',
    photo: ''
}

let aboutMeReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default aboutMeReducer;