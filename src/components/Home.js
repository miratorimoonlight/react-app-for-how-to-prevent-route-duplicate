import React, {useEffect} from 'react'

export default function Home(props) {
    console.log("in HOME...", props)

    //Dynamic tab title. FYI: UseEffect(function, []) is like componentDidMount in class component.
    useEffect(()=> {
        document.title="Home"
    }, [])

    return (
        <div className="alert alert-primary">
            This is homepage
        </div>
    )
}
