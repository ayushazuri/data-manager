import "./index.scss";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import CertificateCard from "../../components/CertificateCard";
import CertificateModal from "../../components/CertificateCard/CertificateModal";
import axios from "../../axios";
import dataAction from "../../redux/action/dataAction";
import { withStyles } from "@material-ui/core/styles";

const CertificationInfo = () => {
	const dispatch = useDispatch();
	const [data, setData] = useState([]);
	const theme = useSelector((state) => state.changeTheme);
	const [show, setShow] = useState(false);
	const addCertificate = true;

	useEffect(() => {
		axios.get("/certification").then((req) => {
			setData(req.data);
			dispatch(dataAction("CERTIFICATION", req.data));
		});
	}, [dispatch]);

	const CustomButton = withStyles({
		root: {
			textTransform: "none",
			backgroundColor: theme.text,
			"&:hover": {
				backgroundColor: theme.text,
				borderColor: theme.text,
			},
			"&:active": {
				backgroundColor: theme.jacketColor,
				borderColor: theme.jacketColor,
			},
		},
	})(Button);

	return (
		<div className="certificate">
			{data.map((certificate) => {
				return <CertificateCard certificate={certificate} />;
			})}
			<div className="buttons">
				<CustomButton
					variant="contained"
					size="large"
					color="primary"
					className="buttons"
					onClick={() => setShow(true)}
				>
					Add a Certificate
				</CustomButton>
			</div>
			{show && (
				<CertificateModal
					theme={theme}
					addCertficate={addCertificate}
					show={show}
					length={data.length}
					onClose={() => setShow(false)}
				/>
			)}
		</div>
	);
};

export default CertificationInfo;
