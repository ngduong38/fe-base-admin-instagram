import { FaUsers, FaArrowAltCircleRight, FaNewspaper  } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Index() {
    <>
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col6">
                        <div className="small-box bg-info text-white">
                            <div className="inner">
                                <h3>100</h3>
                                <p>Users</p>
                            </div>
                            <div className="icon">
                                <FaUsers/>
                            </div>
                            <Link to={"/"} className="small-box-footer">
                                More info
                                <FaArrowAltCircleRight className="ms-1"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="small-box bg-success text-white">
                            <div className="inner">
                                <h3>100</h3>
                                <p>Bài Viết</p>
                            </div>
                            <div className="icon">
                                <FaNewspaper/>
                            </div>
                            <Link to={"/"} className="small-box-footer">
                                More info
                                <FaArrowAltCircleRight className="ms-1"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-3">
                        
                    </div>
                </div>
            </div>
        </section>
    </>
}