import { useBreakpointValue } from "@chakra-ui/react";
import { ItemPortfolioFolder } from "../../../components/ItemPortfolioFolder";

import { Portfolio } from "./styles";

export function SessionPortfolio() {
  const width = useBreakpointValue({
    base: '100%',
    sm: '95%',
    md: '85%',
    lg: '100%',
    xl: '100%',
    '2xl': '100%',
  });

  return (
    <Portfolio id="portfolio">
      <div className="header-title">
        <h1>
          Meu Portfólio
        </h1>
        <h2>
          melhores projetos já criados
        </h2>
      </div>
      <div className="portfolios" style={{ width }}>
        <ItemPortfolioFolder
          animatedFor='left'
          title="Mais de 35 Projetos desenvolvidos"
          text="Diferentes temas: Sites, Landing Pages, Plataformas, Sites Institucionais e mais"
          href="/portfolio/dev"
        />
        <ItemPortfolioFolder
          animatedFor='right'
          title="Mais de 70 Artes publicadas"
          text="Brandings, Carrosseis, Posts Únicos, Artes de Anúncios para Redes Sociais e mais"
          href="/portfolio/design"
        />
      </div>
    </Portfolio>
  );
}