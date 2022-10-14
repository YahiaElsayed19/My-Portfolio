import React from 'react'
import classes from './MyWork.module.css'
import template1 from '../../assets/template1.png'
import template2 from '../../assets/template2.png'
import template3 from '../../assets/template3.png'
import completeproject from '../../assets/completeproject.png'
import quizapp from '../../assets/quizapp.png'
import todolist from '../../assets/todolist.png'
import expensetracker from '../../assets/expensetracker.png'
import foodapp from '../../assets/foodapp.png'

const MyWork = () => {
    const BOX = [
        {
            id: 'p1',
            image: template1,
            description: '',
            github: 'https://github.com/YahiaElsayed19/Template1',
            live: 'https://yahiaelsayed19.github.io/Template1/',
        },
        {
            id: 'p2',
            image: template2,
            description: '',
            github: 'https://github.com/YahiaElsayed19/Template2',
            live: 'https://yahiaelsayed19.github.io/Template2/',
        },
        {
            id: 'p3',
            image: template3,
            description: '',
            github: 'https://github.com/YahiaElsayed19/Template3',
            live: 'https://yahiaelsayed19.github.io/Template3/',
        },
        {
            id: 'p4',
            image: completeproject,
            description: '',
            github: 'https://github.com/YahiaElsayed19/Complete-Project',
            live: '',
        },
        {
            id: 'p5',
            image: quizapp,
            description: '',
            github: 'https://github.com/YahiaElsayed19/Quiz-App',
            live: '',
        },
        {
            id: 'p6',
            image: todolist,
            description: '',
            github: 'https://github.com/YahiaElsayed19/To-do-List',
            live: '',
        },
        {
            id: 'p7',
            image: expensetracker,
            description: '',
            github: '',
            live: '',
        },
        {
            id: 'p8',
            image: foodapp,
            description: '',
            github: 'https://github.com/YahiaElsayed19/Food-order-app',
            live: '',
        },
    ]

    return (
        <div className={classes['my-work']}>
            <div className={classes['my-work__wrapper']}>
                <div className={classes['my-work__box']}>
                    <p className={classes['my-work__description']}></p>
                    <img className={classes['my-work__image']} />
                    <div className={classes['my-work__btn']}></div>
                </div>
            </div>
        </div>
    )
}

export default MyWork