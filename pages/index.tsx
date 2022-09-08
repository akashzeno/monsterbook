import Head from "next/head";
import { ChangeEvent, useState } from "react";
import styles from "../styles/Home.module.css";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import { getData } from "../utils/data_utils";

export type User = {
	id: string;
	name: string;
	email: string;
};

type HomeProps = {
	usersData: User[];
};
export async function getStaticProps() {
	const usersData = await getData<User[]>(
		"https://jsonplaceholder.typicode.com/users"
	);
	return {
		props: { usersData },
	};
}

export default function Home({ usersData }: HomeProps) {
	const [users, setUsers] = useState<User[]>(usersData);
	const filterUsers = (event: ChangeEvent<HTMLInputElement>): void => {
		const filteredUsers = usersData.filter((user) =>
			user.name.toLowerCase().includes(event.target.value.toLowerCase())
		);
		setUsers(filteredUsers);
	};
	return (
		<div className={styles.container}>
			<Head>
				<title>Monsterbook</title>
			</Head>
			<h1 className={styles.title}>Monsterbook</h1>
			<SearchBox filterUser={filterUsers} placeholder="Search Monsters" />
			<CardList users={users} />
		</div>
	);
}
