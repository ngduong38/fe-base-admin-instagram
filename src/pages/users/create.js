import { useState } from "react"
import ContentHeader from "../../components/_common/content/contentHeader.js"
import UserFormElement from "./elements/form.js"

export default function UserCreate() {
    const [breadcrumb] = useState([
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Quản lý users',
            link: 'users'
        },
    ])
    const [parentTitle] = useState('Quản lý users')
    const [title] = useState('Thêm mới user')

    return (
        <>
            <ContentHeader breadcrumb={breadcrumb} title={parentTitle}/>
            <section className={'content'}>
                <div className={'container-fluid'}>
                    <div className={'row'}>
                        <div className={'col-12'}>
                            <div className="card mb-3">
                                <div className="card-header text-white bg-primary">
                                    <h3 className="card-title">{ title }</h3>
                                </div>
                                <UserFormElement/>
                            </div>    
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}