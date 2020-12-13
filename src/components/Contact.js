import React, {useEffect} from 'react'

export default function Contact() {

    //Dynamic tab title. FYI: UseEffect(function, []) is like componentDidMount in class component.
    useEffect(()=> {
        document.title="Contact"
    }, [])

    return (
        <div className="alert alert-success">
            This is Contact Page
        </div>
    )
}
