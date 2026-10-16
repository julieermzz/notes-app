import { useState } from "react"

const NoteForm = () => {

    const [formData, setFormData] = useState({
        title: '',
        category: 'work',
        priority: 'Medium',
        description: ''
    })
     
    const [isFormVisible, setIsFormVisible] = useState(false)
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //validacion
        if (!formData.title || !formData.description) return

        //Crear notas a el estado (state)
        setNotes([newNotes, ...notes])

        //Reset de campios de FormData
        setFormData({
            tittle: '',
            category: 'work',
            priority: 'Medium',
            description: ''
        })
    }


}

export default NoteForm;