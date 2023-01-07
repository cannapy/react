
const SingleCountry= ({country,index}) =>{    
    const languageValues=Object.values(country.languages)
    console.log(country.lang)
    if(country.lang){
        return(
            <>
                <h1>{country.name.common}</h1><button onClick={console.log(country)}>{country.lang?'hide':'show'}</button>
                <p>capital {country.capital}</p>
                <p>area {country.area}</p>
                <p><b>languages:</b></p>
                <ul>
                    {languageValues.map((language)=><li key={language}>{language}</li>)}
                </ul>
                <img src={country.flags.png} alt='flag'></img>
            </>
        )
    }
    return(<><li key={country.name.common}>{country.name.common}</li><button onClick={setCountries()}>{country.lang?'hide':'show'}</button></>)
}

const TooManyCountries=()=>
    <p>Too many matches, specify another filter</p>


const MultiCountries=({countries})=>{
    console.log(countries)
    return(
        <ul>
            {countries.map((country,index)=>{
                return(
                    <>
                        <SingleCountry country={country} single={country.lang} index={index}/>
                    </>, index+=1
                )
            })}
        </ul>
    )
}

const ShowCountries=({countriesToShow})=>{
    if (countriesToShow.length>10){
        return(<TooManyCountries />)
    }
    else if (countriesToShow.length===1){
        return(
            <SingleCountry country={countriesToShow[0]} single={true} index={0}/>
        )
    }
    return(
        <MultiCountries countries={countriesToShow}/>
    )
}

export default ShowCountries


