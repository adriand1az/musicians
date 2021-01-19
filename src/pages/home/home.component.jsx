import React from 'react';
import './home.styles.css'
import background from '../../assets/img/ben-koorengevel-r2HthctfubY-unsplash.jpg'

function HomePage (){
    return(
        <div className='container'>
            <div className='left-side'>
                <header className='left-side-header'>
                    <h1>Awge</h1>
                    <span>The greatest group in virginia</span>
                </header>
                <div className='left-side-content'>
                    <h2>Based in VA</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quidem sapiente neque voluptas dolorem veritatis tenetur laboriosam, debitis natus eaque, provident itaque illum at ex magni facere consequuntur consequatur laborum!</p>
                </div>
            </div>
            <div className='right-side-img' style={{backgroundImage: `url(${background}) `}}>

                <div className='right-side'>
                    <div className='right-side-header'>
                        <h1>Awge</h1>
                        <span>HipHop</span>
                    </div>
                    <div className='right-side-content'>
                        <h2>New album <span>ColorBlind</span> on sale now</h2>
                        <p>Perfoming live every tuesday at local bar</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomePage;