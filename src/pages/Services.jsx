import PageHeader from "../components/PageHeader";
import ServiceCard from "../components/ServiceCard";
import { serviceList } from "../data/portfolioData";

function Services() {
  return (
    <>
      <PageHeader title="Services" subtitle="Areas where I can help." />
      <section className="section">
        <div className="container card-grid">
          {serviceList.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
