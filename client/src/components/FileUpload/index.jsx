import React, { useState } from "react";
import styles from "./FileUpload.module.css";
import Progress from "../Progress";

const FileUpload = ({
	fileName,
	uploadPercentage,
	isUploading,
	handleChange,
	handleSubmit,
	description,
}) => {
	const [status, setStatus] = useState("waiting to be processed..");
	const showMessage = () => {
		setTimeout(() => setStatus("processing"), 2000);
		setTimeout(() => setStatus(""), 4000);
	};
	return (
		<div className={styles["container"]}>
			{description ? (
				<div>
					<h4>My Saved Templates</h4>
					<span>
						If you have several PDFs with the same layout, you can select the
						appropriate regions once, then save the selections as a Ethan's
						Refinery Template, and load it in subsequent PDFs. You can see your
						saved templates here; you can also rename and delete them. If
						someone has shared a template with you, you can import it to Ethan's
						Refinery here.
					</span>
				</div>
			) : null}
			{description ? (
				<span className={styles["instruction"]}>
					Import one or more Templates
				</span>
			) : (
				<span className={styles["instruction"]}>Import one or more PDFs</span>
			)}
			<form className={styles["form"]} onSubmit={handleSubmit}>
				<label className={styles["browse"]} htmlFor="customFile">
					Browse...
				</label>
				{description ? (
					<input
						type="file"
						name="file"
						id="customFile"
						className={styles["file"]}
						onChange={handleChange}
						accept="application/JSON"
					/>
				) : (
					<input
						type="file"
						name="file"
						id="customFile"
						className={styles["file"]}
						onChange={handleChange}
					/>
				)}
				<label className={styles["file-name"]} htmlFor="customFile">
					{fileName ? fileName : "Choose File"}
				</label>
				<input
					className={styles["import-btn"]}
					type="submit"
					value="Import"
					onClick={showMessage}
				/>
			</form>
			{isUploading ? (
				<div className={styles["upload-check"]}>
					<span className={styles["header"]}>Upload Progress</span>
					<div className={styles["details"]}>
						<span className={styles["current-file"]}>{fileName}</span>
						<span className={styles["status"]}>{status}</span>
					</div>
					<Progress percentage={uploadPercentage} />
				</div>
			) : (
				<></>
			)}
			<div className={styles["hr"]}></div>
		</div>
	);
};

export default FileUpload;
