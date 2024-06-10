import '../styles/Navbar.module.css'

function Navbar(){
    return(
        <div className='navbar'>
            <nav>
                <a href="/home" aria-label="Accueil" role="link">
                    <div>

                    </div>
                </a>
                
                <a href="/explore" aria-label="Recherchez et explorez" role="link">
                    <div>
            
                    </div>    
                </a>
                    
                <a href="/messages" aria-label="Messages Privés" role="link">
                    <div>

                    </div>
                </a>
                    
                <a href="/i/grok" aria-label="Grok" role="link">
                    <div>
        
                    </div>
                </a>
                    
                <a href="/i/bookmarks" aria-label="Signets" role="link">
                    <div>

                    </div>
                </a>
                    
                <a href="/RJ____45/communities" aria-label="Communautés" role="link">
                    <div>
                
                    </div>
                </a>
                    
                <a href="/i/premium_sign_up" aria-label="Premium" role="link">
                    <div>
                
                    </div>
                </a>
                
                <a href="/i/communitynotes" aria-label="Notes de la Communauté" role="link">
                    <div>
                    
                    </div>
                </a>
                
                <a href="/RJ____45" aria-label="Profil" role="link">
                    <div>
                    
                    </div>
                </a>
            </nav>
        </div>
    )
}

export default Navbar;