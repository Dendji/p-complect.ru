import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './index.module.css'
import Container from '@material-ui/core/Container'
import Heading from '../../components/Heading/Heading'
import Section from '../../components/Section/Section'
import CatalogSidebar from '../../components/CatalogSidebar/CatalogSidebar'
import ProductCard from '../../components/ProductCard/ProductCard'
import { mockProducts } from '../../mocks/products'
import Hidden from '@material-ui/core/Hidden'

interface PageProps {}

const Catalog: NextPage<PageProps> = ({}: PageProps) => {
  const handleProductClick = (id: string) => {}

  return (
    <>
      <Head>
        <title>О ПрофКомплектации</title>
        <meta
          property="description"
          name="Description"
          key="description"
          content=""
        />
      </Head>
      <Section>
        <Container>
          <Heading weight={2} noMt className={style.heading}>
            Гидроизоляция
          </Heading>
          <main className={style.layout}>
            <Hidden smDown>
              <CatalogSidebar />
            </Hidden>
            <div className={style.products}>
              {mockProducts.map((p) => (
                <ProductCard
                  small
                  key={p.id}
                  product={p}
                  onProductClick={() => handleProductClick(p.id)}
                />
              ))}
            </div>
          </main>
        </Container>
      </Section>
    </>
  )
}

export default Catalog
