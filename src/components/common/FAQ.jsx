import React from "react";
import {
	Typography,
	Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqData from "../../data/faq.json";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Accordion = styled((props) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	'&:not(:last-child)': {
		borderBottom: 0,
	},
	'&::before': {
		display: 'none',
	},
}));

const AccordionSummary = styled((props) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === 'dark'
			? 'rgba(255, 255, 255, .05)'
			: 'rgba(0, 0, 0, .03)',
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(90deg)',
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function FAQSection() {
	const [expanded, setExpanded] = React.useState('')

	const handleChange =
		(panel) => (event, newExpanded) => {
			setExpanded(newExpanded ? panel : false);
		};
	return (
		<Container maxWidth="md">
			<Typography variant="h4" gutterBottom align="center" color={"#ff6600"}>
				Frequently Asked Questions
			</Typography>
			{faqData.map(({ question, answer }, index) => {
				const panel = 'panel' + String(index + 1)
				const clicked = panel == expanded
				return (
					<div key={"faq_section_" + index}>
						<Accordion sx={{ marginBottom: "15px", boxShadow: "#f5f3f3 0px 5px 5px 0px" }} expanded={expanded === panel} onChange={handleChange(panel)}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								// onClick={() => setClicked(!clicked)}
								sx={{ boxShadow: "10px", color: clicked ? "#fff" : "#000", backgroundColor: clicked ? "#f1794a" : "#fff" }}
							>
								<Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
									{question}
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>{answer}</Typography>
							</AccordionDetails>
						</Accordion>
					</div>

				);
			})}
		</Container>
	);
}
