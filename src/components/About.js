import React, {useEffect} from 'react'

export default function About() {

    //Dynamic tab title. FYI: UseEffect(function, []) is like componentDidMount in class component.
    useEffect(()=> {
        document.title="About"
    }, [])

    return (
        <div className="alert alert-secondary">
            This is About Page
        </div>
    )
}
