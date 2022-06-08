import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import CardList from "../components/CardList.js";
import SearchBox from "../components/SearchBox.js";

export async function getStaticProps() {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const usersData = await response.json();
	return {
		props: { usersData },
	};
}

export default function Home({ usersData }) {
	const [users, setUsers] = useState(usersData);
	const filterUsers = (event) => {
		const filteredUsers = usersData.filter((user) => {
			return user.name.toLowerCase().includes(event.target.value.toLowerCase());
		});
		setUsers(filteredUsers);
	};
	return (
		<div className={styles.container}>
			<Head>
				<title>Monsterbook</title>
			</Head>
			<h1 className={styles.title}>Monsterbook</h1>
			<SearchBox onChange={filterUsers} placeholder="Search Monsters" />
			<CardList users={users} />
		</div>
	);
}
