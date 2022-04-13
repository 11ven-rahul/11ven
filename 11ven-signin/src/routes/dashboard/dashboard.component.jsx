import './dashboard.styles.scss';

const Dashboard = () => {

    const obj = JSON.parse(localStorage.getItem("user_data"));
    

    return (
        <h3>Hello, {obj ? obj.name:"Guest"}</h3>
    )
}

export default Dashboard;