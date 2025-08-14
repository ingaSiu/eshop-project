import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import Filter from '@/components/Filter';
import ProductList from '@/components/ProductList';
import Sort from '@/components/Sort';
import { getSortedProducts } from '@/lib/queries/getSortedProducts';

const PAGE_SIZE = 6;

const getPageLink = (page: number, sort?: string, category?: string | string[]) => {
  const params = new URLSearchParams();
  if (sort) params.set('sort', sort);
  if (category) {
    if (Array.isArray(category)) {
      category.forEach((cat) => params.append('category', cat));
    } else {
      params.set('category', category);
    }
  }
  params.set('page', page.toString());
  return `/?${params.toString()}`;
};

const Home = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) => {
  const { sort, category, page } = await searchParams;

  const currentPage = Math.max(parseInt(page || '1', 10), 1);
  const categories = category ? (Array.isArray(category) ? category : [category]) : [];
  const productsList = await getSortedProducts(sort || 'default', categories, currentPage, PAGE_SIZE);
  const totalPages = Math.ceil(productsList.totalCount / PAGE_SIZE);

  return (
    <>
      <section className="orange_container">
        <h1 className="heading">
          Shop for cat merch, <br /> With ease and comfort 😻
        </h1>
        <p className="sub-heading !max-w-3xl">Find the best deals from biggest cat merch shop! 🐱‍💻</p>
      </section>

      <section className="section_container">
        {productsList.items.length > 0 ? (
          <div className="flex gap-4">
            <Sort />
            <Filter />
          </div>
        ) : (
          ''
        )}

        <ProductList products={productsList.items} />

        {totalPages > 1 && (
          <section className="mt-8">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href={getPageLink(currentPage - 1, sort, category)}
                    aria-disabled={currentPage === 1}
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }).map((_, i) => {
                  const pageNum = i + 1;
                  return (
                    <PaginationItem key={pageNum}>
                      <PaginationLink href={getPageLink(pageNum, sort, category)} isActive={pageNum === currentPage}>
                        {pageNum}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
                <PaginationEllipsis />
                <PaginationItem>
                  {currentPage < totalPages ? (
                    <PaginationNext href={getPageLink(currentPage + 1, sort, category)} />
                  ) : (
                    <PaginationNext className="pointer-events-none opacity-50" />
                  )}
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </section>
        )}
      </section>
    </>
  );
};

export default Home;
