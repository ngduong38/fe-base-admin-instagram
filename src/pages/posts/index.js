import ContentHeader from "../../components/_common/content/contentHeader"
import { useForm } from "react-hook-form";
import { useState} from "react";
import { Link } from "react-router-dom";

export default function PostIndex () {
    const {
        register
    } = useForm({
        defaultValues: {
            id: '',
            title: '',
            status: '',
            date: '',
        }
    });
    const [breadcrumb] = useState([
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Quản lý posts',
            link: 'posts'
        },
    ]);
    const [parentTitle] = useState('Quản lý posts');
    const [title] = useState('Danh sách posts');
    const [posts, setUsers] = useState({});

    return (
        <>
            <ContentHeader breadcrumb={breadcrumb} title={parentTitle}/>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card mb-3">
                                    <div className="card-header">
                                        <h3 className="card-title">
                                            Tìm kiếm
                                        </h3>
                                        <div className="card-body">
                                            <form  >
                                                <div className="row mb-3">
                                                    <div className="col-3">
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            placeholder="Id"
                                                            {...register('id', {
                                                                
                                                            })}
                                                        />
                                                    </div>
                                                    <div className="col-3">
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            placeholder={"Ngày đăng bài"}
                                                            {...register('date', {
                                                                
                                                            })}
                                                        />
                                                    </div>
                                                    <div className="col-3">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder={"Tiêu đề"}
                                                            {...register('title', {
                                                                
                                                            })}
                                                        />
                                                    </div>
                                                    <div className="col-3">
                                                        <select className="form-select" aria-label="Trạng thái"
                                                                {...register('status')}
                                                        >
                                                            <option value={''}>Trạng thái</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className={"row"}>
                                                    <div className="col-auto">
                                                        <button type="submit" className="btn btn-primary me-2">
                                                            Tìm kiếm
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="card mb-3">
                                                    <div className="card-header">
                                                        <h3 className="card-title">{ title }</h3>
                                                    </div>
                                                    <div className={'card-body'}>
                                                        <table className="table table-bordered">
                                                            <thead>
                                                            <tr className={'text-center'}>
                                                                <th style={{width:10}}>#</th>
                                                                <th>Id</th>
                                                                <th>Title</th>
                                                                <th>Status</th>
                                                                <th>Date</th>
                                                                <th style={{width:`15%`}}>Label</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            {
                                                                posts.docs && posts.docs.map( (posts, index) => {
                                                                    return (
                                                                        <tr key={index}>
                                                                            <td>
                                                                                { index + 1 }
                                                                            </td>
                                                                            <td>
                                                                                { posts.id }
                                                                            </td>
                                                                            <td>
                                                                                { posts.title }
                                                                            </td>
                                                                            <td>
                                                                                { posts.date }
                                                                            </td>
                                                                            <td>
                                                                                {
                                                                                    // Object.values(USER.levels).find( level => level.value === user.level).label
                                                                                }
                                                                            </td>
                                                                            <td className={'text-center'}>
                                                                                <button type="button" className="btn btn-danger me-2" >Xóa</button>
                                                                                <Link to={ posts._id + '/edit' } className="btn btn-success">Chỉnh sửa</Link>
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}