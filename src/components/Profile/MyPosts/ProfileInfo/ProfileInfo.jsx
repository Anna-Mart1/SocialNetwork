import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='https://walldeco.ru/catalog/3362.jpg' alt=''/>
            </div>
            <div className={s.descriptionblock}>
                <img src='https://felomena.com/wp-content/images/sonnik/bukva/k/kot.jpg' alt=''/>
            </div>
        </div>
    )
}

export default ProfileInfo;