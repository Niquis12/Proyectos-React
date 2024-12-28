import { useState } from 'react'

export function TwitterFollowCard ({children,userName, initialIsfollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsfollowing)




    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    
    const handelClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar' 
                    src={`https://unavatar.io/${userName}`} 
                    alt="El avatar de ${userName}" 
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handelClick}>
                   <span className='tw-followCard-text'>{text}</span>
                   <span className='tw-followCard-stopFollowing'>Dejar de Seguir </span>
                </button>
            </aside>
        </article>
    )
}

