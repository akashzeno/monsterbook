import styles from "../styles/Card.module.css";
import Image from "next/image";
import { User } from "../pages/index";

type CardProps = {
	user: User;
};

export default function Card({ user: { id, name, email } }: CardProps) {
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
