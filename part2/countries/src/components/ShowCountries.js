const SingleCountry= ({languages}) =>{    
    const languageValues=Object.values(languages)

    return(
        <ul>
            {languageValues.map((language)=><li key={language}>{language}</li>)}
        </ul>
    )
}

const ShowCountries=({countriesToShow})=>{
    if (countriesToShow.length>10){
        return(<p>Too many matches, specify another filter</p>)
    }
    if (countriesToShow.length===1){
        console.log("single Country")
        const country = countriesToShow[0]
        console.log(country.flags.png)
        return(
            <>
                <h1>{country.name.common}</h1>
                <p>capital {country.capital}</p>
                <p>area {country.area}</p>
                <p><b>languages:</b></p>
                <SingleCountry languages={country.languages}/>
                <img src={country.flags.png} alt='flag'></img>
            </>
        )
    }
    return(
        <ul>
            {countriesToShow.map((country)=><li key={country.name.common}>{country.name.common}</li>)}
        </ul>
    )
}

export default ShowCountries


