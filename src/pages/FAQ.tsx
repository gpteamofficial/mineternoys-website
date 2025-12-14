import { forwardRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "General",
    questions: [
      {
        q: "What is Mineternoys?",
        a: "Mineternoys is a technology company focused on providing reliable automation, monitoring, and configuration tools for community-based game servers. We offer two main products: MineMeganBot for automation and MineMegan Config for server configuration.",
      },
      {
        q: "Who is Mineternoys for?",
        a: "Our tools are designed for server administrators and community managers who want to automate repetitive tasks, monitor their servers, and maintain optimal configurations without constant manual intervention.",
      },
      {
        q: "How do I get started?",
        a: "The best way to get started is to join our Discord community. There, you can learn about our products, get support from our team, and connect with other server administrators.",
      },
    ],
  },
  {
    title: "Products",
    questions: [
      {
        q: "What is MineMeganBot?",
        a: "MineMeganBot is our intelligent automation system that handles activity presence simulation, real-time monitoring, automatic reconnection logic, and Discord integration. It's designed to keep your server running smoothly 24/7.",
      },
      {
        q: "What is MineMegan Config?",
        a: "MineMegan Config is our server configuration tool that helps with server setup, configuration management, performance optimization, and resource organization. It simplifies the process of maintaining optimal server settings.",
      },
      {
        q: "Can I use both products together?",
        a: "Yes! MineMeganBot and MineMegan Config are designed to work together seamlessly. Many of our users combine both products for comprehensive server management.",
      },
    ],
  },
  {
    title: "Pricing",
    questions: [
      {
        q: "Is there a free plan?",
        a: "Yes, we offer a free tier that includes basic automation features and community support. It's a great way to try out our products before upgrading to a paid plan.",
      },
      {
        q: "How does billing work?",
        a: "Paid plans are billed monthly. You can upgrade, downgrade, or cancel your subscription at any time through our Discord server.",
      },
      {
        q: "Do you offer refunds?",
        a: "We offer refunds on a case-by-case basis. If you're not satisfied with our service, please contact us through Discord and we'll work to resolve the issue.",
      },
    ],
  },
  {
    title: "Technical",
    questions: [
      {
        q: "What servers do you support?",
        a: "Our tools are designed primarily for community-based game servers. Please join our Discord to discuss your specific server requirements and compatibility.",
      },
      {
        q: "Is there an API available?",
        a: "API access is available on our Pro plan. It allows you to integrate our tools with your existing systems and create custom workflows.",
      },
      {
        q: "How reliable is the uptime?",
        a: "We maintain 99.9% uptime for our services. Our infrastructure is designed for reliability with automatic failover and monitoring systems.",
      },
    ],
  },
];

const FAQ = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="flex flex-col">
      {/* Header */}
      <section className="page-header relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge-accent mb-6">FAQ</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Find answers to common questions about Mineternoys and our products.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h2 className="text-xl font-bold text-foreground mb-6">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.title}-${index}`}
                      className="border border-border rounded-xl px-6 bg-card data-[state=open]:bg-card/80 transition-colors"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-5 text-foreground font-semibold">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-secondary/30">
        <div className="container-custom">
          <div className="card-premium p-10 md:p-16 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Still have questions?
            </h3>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Can't find the answer you're looking for? Join our Discord community for direct support.
            </p>
            <Button asChild variant="accent" size="lg" className="mt-8">
              <a
                href="https://discord.gg/mineternoys"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Discord
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
});

FAQ.displayName = "FAQ";

export default FAQ;
