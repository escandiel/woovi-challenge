import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./index.css";

export default function TotalizerAccordion() {
  return (
    <div className="totalizer-accordion-container">
      <Accordion className="custom-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <span className="totalizer-accordion-span">Como funciona?</span>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Custo efetivo total é a taxa cobrada sobre crédito ou empréstimo,
            incluindo não apenas a taxa de juros, mas também todas os demais
            encargos ou despesas com tarifas, tributos, seguros e administração.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
