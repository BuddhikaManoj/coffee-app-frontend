import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How fresh is your coffee?',
    answer: 'All our coffee is roasted to order and shipped within 24 hours of roasting. We guarantee freshness with nitrogen-flushed, resealable bags that lock in flavor.',
  },
  {
    question: 'What grind options do you offer?',
    answer: 'We offer whole bean, coarse (French press), medium (drip), medium-fine (pour over), fine (espresso), and extra-fine (Turkish) grinds. We recommend whole bean for the freshest experience.',
  },
  {
    question: 'Do you offer subscriptions?',
    answer: 'We\'re working on a subscription service! Sign up for our newsletter to be notified when it launches. You\'ll get fresh beans delivered on your schedule.',
  },
  {
    question: 'How do I track my order?',
    answer: 'Once your order ships, you\'ll receive a confirmation email with a tracking number. You can also view your order status in the Orders page of your account.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We accept returns on unopened items within 30 days. Opened coffee bags cannot be returned as they are perishable. See our Returns & Exchanges page for details.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes! We ship to select countries worldwide. International shipping typically takes 10–15 business days. Shipping costs and customs fees are calculated at checkout.',
  },
  {
    question: 'Are your products organic or fair trade?',
    answer: 'Many of our single-origin coffees are certified organic and fair trade. Look for the certifications listed on each product page.',
  },
  {
    question: 'How do I contact customer support?',
    answer: 'You can reach us at hello@brewandbean.com, call (555) 123-4567, or use the Contact Us page. Our support team is available Monday–Friday, 9 AM–6 PM EST.',
  },
];

const FAQ = () => {
  return (
    <div className="container py-12 max-w-3xl">
      <h1 className="font-display text-4xl font-bold text-foreground mb-2">Frequently Asked Questions</h1>
      <p className="text-muted-foreground mb-8">Find answers to common questions about our coffee, shipping, and more.</p>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium text-foreground">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
