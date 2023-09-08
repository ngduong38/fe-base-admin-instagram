import ContentHeader from "../../components/_common/content/contentHeader";
import { useForm } from "react-hook-form";
import { useState} from "react";
import {Link} from "react-router-dom";

export default function UserIndex() {
    const {
        register
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            level: ''
        }
    });
    const [breadcrumb] = useState([
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Quản lý users',
            link: 'users'
        },
    ]);
    const [parentTitle] = useState('Quản lý users');
    const [title] = useState('Danh sách users');
    const [users, setUsers] = useState({});
    

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
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Họ tên"
                                                        {...register('name', {
                                                            maxLength :{
                                                                value:50,
                                                                message: "Họ tên không được lớn hơn 50 ký tự"
                                                            }
                                                        })}
                                                    />
                                                </div>
                                                <div className="col-3">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        placeholder={"Email"}
                                                        {...register('email', {
                                                            maxLength: {
                                                                value: 50,
                                                                message: "Email không được lớn hơn 50 ký tự"
                                                            }
                                                        })}
                                                    />
                                                </div>
                                                <div className="col-3">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder={"Số điện thoại"}
                                                        {...register('phone', {
                                                            maxLength: {
                                                                value: 11,
                                                                message: "Số điện thoại không được lớn hơn 11 ký tự"
                                                            },
                                                            minLength: {
                                                                value: 10,
                                                                message: "Số điện thoại không được ít hơn 10 ký tự"
                                                            }
                                                        })}
                                                    />
                                                </div>
                                                <div className="col-3">
                                                    <select className="form-select" aria-label="Phân quyền"
                                                            {...register('level')}
                                                    >
                                                        <option value={''}>Phân quyền</option>
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
                                                            <th>Họ tên</th>
                                                            <th>Email</th>
                                                            <th>Số điện thoại</th>
                                                            <th>Phân quyền</th>
                                                            <th style={{width:`15%`}}>Label</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {
                                                            users.docs && users.docs.map( (user, index) => {
                                                                return (
                                                                    <tr key={index}>
                                                                        <td>
                                                                            { index + 1 }
                                                                        </td>
                                                                        <td>
                                                                            { user.name }
                                                                        </td>
                                                                        <td>
                                                                            { user.email }
                                                                        </td>
                                                                        <td>
                                                                            { user.phone }
                                                                        </td>
                                                                        <td>
                                                                            {
                                                                                // Object.values(USER.levels).find( level => level.value === user.level).label
                                                                            }
                                                                        </td>
                                                                        <td className={'text-center'}>
                                                                            <button type="button" className="btn btn-danger me-2" >Xóa</button>
                                                                            <Link to={ user._id + '/edit' } className="btn btn-success">Chỉnh sửa</Link>
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