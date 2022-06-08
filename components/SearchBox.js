import styles from "../styles/SearchBox.module.css";

export default function SearchBox({ onChange, placeholder }) {
	return (
		<input
			className={styles.searchBox}
			type="search"
			placeholder={placeholder}
			onChange={onChange}
		/>
	);
}
