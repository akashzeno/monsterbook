import styles from "../styles/Card.module.css";
import Image from "next/image";

export default function Card({ user: { id, name, email } }) {
	return (
		<div className={styles.cardContainer}>
			<Image
				src={`https://robohash.org/${id}?set=set2&size=180x180`}
				alt={name}
				width={180}
				height={180}
				layout="responsive"
			></Image>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
}
