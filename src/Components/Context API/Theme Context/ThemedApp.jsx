import React, { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContextProvider";
import styles from "./ThemedApp.module.css";

const intial = {
    name: "",
    age: "",
    address: "",
    department: "",
    salary: 0,
    maritalState: false,
    profilePhoto: ""
};

const ThemedApp = () => {
    const [formState, setFormState] = useState(intial);
    const [ { theme , themeData }, toggleTheme ] = useContext( ThemeContext );

    const handleFormUpdate = (e) => {
        let { name, value, checked, type } = e.target;
        value = type === "checkbox" ? checked : value;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    return (
        <div className={styles.main} style={themeData[theme]}>
            <div className={styles.header}>
                <p>Click on Button to Change the Theme to { theme === "light" ? "Dark" : "Light" }</p>
                <button onClick={toggleTheme}>{ theme === "light" ? "Dark" : "Light" }</button>
            </div>
            <form >    
                <div>
                    <h2>Add new Employee</h2>
                    <div className={styles.inpRow} >
                        <label htmlFor="name">Name</label>
                        <input type="text" onChange={handleFormUpdate} name="name" value={formState.name} required={true}/>
                    </div>
                    <div className={styles.inpRow} >
                        <label htmlFor="age">Age ( in years )</label>
                        <input type="text" onChange={handleFormUpdate} name="age" value={formState.age} required={true}/>
                    </div>
                    <div className={styles.inpRow} >
                        <label htmlFor="address">Address</label>
                        <input type="text" onChange={handleFormUpdate} name="address" value={formState.address} />
                    </div>
                    <div className={styles.inpRow} >
                        <label htmlFor="department">Department</label>
                        <select onChange={handleFormUpdate} name="department" required={true}>
                            <option value="">Please choose an option</option>
                            <option value="management">Mangement</option>
                            <option value="operations">Operations</option>
                            <option value="it">IT</option>
                            <option value="resources">Resources</option>
                        </select>
                    </div>
                    <div className={styles.inpRow} >
                        <label htmlFor="salary">Salary</label>
                        <input type="number" onChange={handleFormUpdate} name="salary" value={formState.salary} required={true}/>
                    </div>
                    <div className={styles.inpRow} >
                        <label htmlFor="maritalStatus">Married</label>
                        <input type="checkbox" onChange={handleFormUpdate} name="maritalStatus" value={formState.maritalState} />
                    </div>
                    <input type="submit" value="Submit" className={styles.submit} />
                </div>
            </form>
        </div>
    )
}

export default ThemedApp;