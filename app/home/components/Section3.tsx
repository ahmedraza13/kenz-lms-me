"use client"

import "./main.css";

const WhiteBrick = ({ image, title, options }: any) => {

    return (
        <>
            <div className="brick-white">
                <img src={image} alt="image" />
                <div>
                    <h3>{title}</h3>
                    <ul>
                        {
                            options?.map((opt: any, i: number) => <li key={i}>{opt}</li>)
                        }
                    </ul>
                </div>
            </div>
        </>
    )

}

const Section3 = () => {

    const brickOptions = [
        {
            title: "Lorem ipsum",
            options: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
            image: "https://plus.unsplash.com/premium_photo-1661288553491-2218d09372be?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Lorem ipsum",
            options: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
            image: "https://plus.unsplash.com/premium_photo-1663050633633-2856e875dcc7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Lorem ipsum",
            options: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
            image: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Lorem ipsum",
            options: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
            image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1156&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Lorem ipsum",
            options: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
            image: "https://images.unsplash.com/photo-1681516582806-63e90c9426b7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Lorem ipsum",
            options: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
            image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]

    return (
        <>
            <div className="section-3">
                <h2>Explore Featured <span>Categories</span></h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque mollitia cupiditate esse quia, consequatur ab minus
                    <br />
                    consectetur temporibus facere, facilis consequuntur, eum ea illo eveniet obcaecati voluptatum earum possimus illum?
                </p>
                <div className="bricks-cont">
                    {brickOptions?.map((opt: any, i: number) => <WhiteBrick key={i} title={opt?.title} options={opt?.options} image={opt?.image} />)}
                </div>
            </div>
        </>
    )
}

export default Section3;
