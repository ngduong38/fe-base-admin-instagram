import { useState } from "react"
import ContentHeader from "../../components/_common/content/contentHeader"


export  default function PostsEdit() {
    const [breadcrumb] = useState([
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Quản lý posts',
            link: 'posts'
        },
    ])
    const [parentTitle] = useState('Quản lý posts')
    const [title] = useState('Chỉnh sửa posts')
    
    return (
        <>
            <ContentHeader breadcrumb={breadcrumb} title={parentTitle}/>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card mb-3">
                                <div className="card-header text-white bg-success">
                                    <h3 className="card-title">{title}</h3>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}