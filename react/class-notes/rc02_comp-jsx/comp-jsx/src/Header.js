//? Header Component

function Header(){
    //! JS alanı
    const yazi = "Hello FS16"
    return (
        <header>
            {/* JSX alanı yorum satırı */}
            <h1 className="par">{yazi}</h1>
        </header>
    )
}

export default Header