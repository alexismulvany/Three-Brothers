import React, { useState, useEffect } from 'react';

// Categorized Menu Data with Section Descriptions
const menuData = [
  {
    category: "Breakfast Specials",
    sectionDesc: [
        "All Specials served w/ Home Fries & Choice of Toast: White, Rye, or Whole Wheat Bread.",
        "For Bagel, Hard Roll, or English Muffin add $1.00.",
        "Add an Extra Egg to any Special for $.75.",
    ],
    items: [
      { name: "1 Egg w/ Home Fries and Toast", price: "$6.95", desc: "" },
      { name: "2 Eggs w/ Home Fries and Toast", price: "$8.50", desc: "" },
      { name: "2 Eggs w/ Meat", price: "$10.95", desc: "Choice of Taylor Ham, Bacon, or Pork Sausage (Links or Patties)" },
      { name: "2 Eggs w/ Virginia Ham or Beef Sausage", price: "$12.95", desc: "" },
      { name: "2 Eggs w/ Corn Beef Hash", price: "$13.95", desc: "" },
      { name: "2 Eggs w/ Steak & Sauteed Onions", price: "$14.95", desc: "" },
      { name: "Number 1", price: "$10.95", desc: "2 Eggs, 1 Pancake, 2 Strips of Bacon, Juice & Coffee or Tea" },
      { name: "Number 2", price: "$11.95", desc: "2 Eggs, Home Fries, Toast, Juice & Coffee or Tea" },
      { name: "Number 3", price: "$13.95", desc: "2 Eggs, Home Fries, Toast, Choice of Meat, Juice & Coffee or Tea" },
    ]
  },
  {
    category: "Traditional Breakfast",
    sectionDesc: "",
    items: [
      { name: "Belgian Waffles", price: "$7.25", desc: "" },
      { name: "Belgian Waffles w/ Choice of Meat or Fruit", price: "$11.95", desc: "" },
      { name: "Short Stack", price: "$7.50", desc: "" },
      { name: "Short Stack w/ Choice of Meat or Fruit", price: "$10.95", desc: "" },
      { name: "3 Pancakes", price: "$8.95", desc: "" },
      { name: "3 Pancakes w/ Choice of Meat or Fruit", price: "$11.95", desc: "" },
      { name: "French Toast", price: "$8.25", desc: "" },
      { name: "French Toast w/ Choice of Meat or Fruit", price: "$11.95", desc: "" },
      { name: "Farmer's Special", price: "$13.95", desc: "3 Pancakes & 2 Eggs w/ 2 Bacon Strips, Ham & Sausage" },
    ]
  },
  {
    category: "3-Egg Omelets",
    sectionDesc: [
      "All 3 Egg Omelets served w/ Home Fries & Choice of Toast: White, Rye, or Whole Wheat Bread.",
      "For Bagel, Hard Roll, or English Muffin add $1.00.",
    ],
    items: [
      { name: "Plain Omelet", price: "$8.25", desc: "" },
      { name: "Cheese Omelet", price: "$10.95", desc: "Swiss, American, Mozzarella, Feta, or Provolone" },
      { name: "Western Omelet", price: "$11.25", desc: "Ham, Onions, & Peppers" },
      { name: "Bacon Omelet", price: "$11.25", desc: "" },
      { name: "Bacon & Cheese Omelet", price: "$11.95", desc: "" },
      { name: "Ham Omelet", price: "$10.50", desc: "" },
      { name: "Ham & Cheese Omelet", price: "$11.95", desc: "" },
      { name: "Greek Omelet", price: "$11.95", desc: "Tomato & Feta" },
      { name: "Mushroom Omelet", price: "$10.95", desc: "" },
      { name: "Mushroom & Cheese Omelet", price: "$11.95", desc: "" },
      { name: "Spinach Omelet", price: "$10.95", desc: "" },
      { name: "Spinach & Feta Omelet", price: "$11.95", desc: "" },
      { name: "Onion Omelet", price: "$10.95", desc: "" },
      { name: "Onion & Cheese Omelet", price: "$11.95", desc: "" },
      { name: "Veggie Omelet", price: "$11.95", desc: "" },
      { name: "Veggie & Cheese Omelet", price: "$12.95", desc: "" },
      { name: "Turkey Feta Spinach Omelet", price: "$12.95", desc: "" },
      { name: "Cheese Steak Omelet", price: "$12.95", desc: "w/ American Cheese, Peppers & Onions" },
      { name: "Broccoli Mushroom Mozzarella Omelet", price: "$12.95", desc: "" },
      { name: "Mushroom Onion Mozzarella Omelet", price: "$12.95", desc: "" },
      { name: "Italian Omelet", price: "$12.95", desc: "w/ Sausage, Peppers, Onions & Mozzarella" },
      { name: "Mexican Omelet", price: "$12.95", desc: "w/ Ham, Bacon, Jalapeno, & Onions" },
      { name: "Mexican Omelet w/ Cheese", price: "$13.50", desc: "w/ Ham, Bacon, Jalapeno, & Onions" },
    ]
  },
  {
    category: "Quick Breakfast",
    sectionDesc: "",
    items: [
      { name: "Cereal", price: "$4.25", desc: "" },
      { name: "Hot Oatmeal", price: "$4.75", desc: "" },
      { name: "Hot Oatmeal w/ Banana", price: "$5.35", desc: "" },
      { name: "Toasted Muffin w/ Butter", price: "$3.25", desc: "" },
      { name: "Cinnamon Toast", price: "$2.75", desc: "" },
      { name: "Hard Roll w/ Butter", price: "$1.95", desc: "" },
      { name: "English Muffin w/ Butter", price: "$2.35", desc: "" },
      { name: "Homemade Banana Nut Bread", price: "$3.95", desc: "" },
      { name: "Bagel w/ Butter", price: "$2.50", desc: "" },
      { name: "Bagel w/ Cream Cheese", price: "$3.75", desc: "" },
    ]
  },
  {
    category: "Breakfast Sandwiches",
    sectionDesc: "",
    items: [
      { name: "Egg Sandwich", price: "$5.95", desc: "" },
      { name: "Egg Sandwich w/ Cheese", price: "$6.50", desc: "" },
      { name: "Potato & Egg Sandwich", price: "$6.95", desc: "" },
      { name: "Potato & Egg Sandwich w/ Cheese", price: "$7.50", desc: "" },
      { name: "Egg Sandwich w/ choice of Meat", price: "$8.50", desc: "Bacon, Sausage, Ham, or Taylor Ham" },
      { name: "Egg Sandwich w/ choice of Meat & Cheese", price: "$8.95", desc: "Bacon, Sausage, Ham, or Taylor Ham" },
      { name: "Western Omelet Sandwich", price: "$8.25", desc: "" },
      { name: "Western Omelet Sandwich w/ Cheese", price: "$8.95", desc: "" },
      { name: "Meat Sandwich on a Hard Roll", price: "$7.95", desc: "Choice of Bacon, Sausage, Ham, or Taylor Ham" },
      { name: "Meat Sandwich on a Hard Roll w/ Cheese", price: "$8.50", desc: "Choice of Bacon, Sausage, Ham, or Taylor Ham" },
    ]
  },
  {
    category: "Breakfast Wraps",
    sectionDesc: "",
    items: [
      { name: "Sausage Potato Egg & Cheese Wrap", price: "$8.95", desc: "" },
      { name: "Turkey, Egg, & Cheese Wrap", price: "$10.50", desc: "" },
      { name: "Egg Whites, Turkey, Spinach, & Tomato Wrap", price: "$10.95", desc: "" },
      { name: "Western Omelet & Cheese Wrap", price: "$9.95", desc: "" },
      { name: "Burrito", price: "$9.95", desc: "" },
    ]
  },
  {
    category: "Breakfast Sides",
    sectionDesc: "",
    items: [
      { name: "Side of 2 Eggs (Any Styles)", price: "$3.25", desc: "" },
      { name: "Side of Sausage, Bacon, or Taylor Ham", price: "$5.95", desc: "" },
      { name: "Side of Virginia Ham", price: "$6.95", desc: "" },
      { name: "Side of Corn Beef Hash", price: "$8.95", desc: "" },
      { name: "Side of Canadian Bacon", price: "$6.25", desc: "" },
      { name: "Side of 1 Beef Sausage", price: "$5.75", desc: "" },
    ]
  },
  {
    category: "Brunch Specials",
    sectionDesc: "",
    items: [
      { name: "Steak & Sauteed Onions", price: "$14.95", desc: "w/ 2 Eggs, Home Fries, & Toast" },
      { name: "Kielbasa", price: "$11.95", desc: "w/ 2 Eggs, Home Fries, & Toast" },
      { name: "Virginia Ham", price: "$12.95", desc: "w/ 2 Eggs, Home Fries, & Toast" },
      { name: "Pastrami", price: "$12.95", desc: "w/ 2 Eggs, Home Fries, & Toast" },
      { name: "Canadian Bacon", price: "$10.95", desc: "w/ 2 Eggs, Home Fries, & Toast" },
      { name: "Pork Chops & Sauteed Onions", price: "$14.95", desc: "w/ 2 Eggs, Home Fries, & Toast" },
      { name: "Grilled Chicken & Sauteed Onions", price: "$14.95", desc: "w/ 2 Eggs, Home Fries, & Toast" },
    ]
  },
  {
    category: "Pinto Specials",
    sectionDesc: [
      "All Specials served w/ Home Fries & Choice of Toast: White, Rye, or Whole Wheat Bread.",
      "For Bagel, Hard Roll, or English Muffin add $1.00.",
      "Add an Extra Egg to any Special for $.75.",
    ],    items: [
      { name: "Pinto, Steak, & 2 Eggs", price: "$15.95", desc: "" },
      { name: "Pinto & Grilled Chicken", price: "$15.95", desc: "" },
      { name: "Pinto & Pork Chops", price: "$15.95", desc: "" },
      { name: "Pinto, Pericos, & Toast", price: "$11.95", desc: "" },
      { name: "Pinto & Choice of Meat", price: "$13.95", desc: "Taylor Ham, Sausage, or Ham" },
    ]
  },
  {
    category: "Lunch Wraps",
    sectionDesc: "All Lunch Wraps served w/ French Fries, Coleslaw, & Pickles",
    items: [
      { name: "Grilled Chicken Ceasar Wrap", price: "$13.95", desc: "" },
      { name: "Chicken Florentine Wrap", price: "$13.95", desc: "" },
      { name: "Chicken Teriyaki Wrap", price: "$13.95", desc: "" },
      { name: "Roast Beef Wrap", price: "$13.95", desc: "w/ Swiss, Lettuce, Tomato, & Mayo" },
      { name: "Philly Cheese Steak Wrap", price: "$13.95", desc: "w/ Onions & Peppers" },
      { name: "Buffalo Chicken Wrap", price: "$13.95", desc: "w/ Lettuce and Tomato" },
      { name: "Greek Wrap", price: "$13.95", desc: "w/ Grilled Chicken, Lettuce, Tomato, Onion & Feta w/ Greek Dressing" },
    ]
  },
  {
    category: "Sammy's Salads",
    sectionDesc: "Add to any Salad: Grilled Chicken - $7.95 | Grilled Steak - $8.95 | Grilled Shrimp - $8.95 | Gyro Meat - $6.95",
    items: [
      { name: "Greek Salad", price: "$9.95", desc: "" },
      { name: "Tossed Salad", price: "$8.95", desc: "" },
      { name: "Chef's Salad", price: "$13.95", desc: "" },
      { name: "Caeser Salad", price: "$10.95", desc: "" },
      { name: "The Famous Sammy Salad", price: "$16.50", desc: "Grilled Chicken or Gyro Meat, Lettuce, Tomato, Cucumber, " +
            "Onion on a bed of Grilled Pita topped with Greek Salad Dressing & Tsatziki Sauce" },

    ]
  },
  {
    category: "Cold Salad Platters",
    sectionDesc: "All Cold Salad Platters served with Lettuce, Tomato, Potato Salad, Homemade Cole Slaw & a Hard Boiled Egg",
    items: [
      { name: "Tuna Salad Platter", price: "$13.95", desc: "" },
      { name: "Chicken Salad Platter", price: "$13.95", desc: "" },
      { name: "Egg Salad Platter", price: "$12.95", desc: "" },
    ]
  },
  {
    category: "Lunch Sandwich Classics",
    sectionDesc: "All Lunch Classics Served w/ French Fries & Cole Slaw EXCEPT for the Monte Cristo",
    items: [
      { name: "Monte Cristo", price: "$11.95", desc: "French Toast w/ Grilled Ham, Turkey, & Melted Swiss Cheese" },
      { name: "Pattie Melt", price: "$12.95", desc: "Hamburger on Grilled Rye w/ Onions & Melted Swiss Cheese" },
      { name: "Tuna Melt", price: "$12.95", desc: "Tuna on Grilled Rye w/ American Cheese" },
      { name: "Grilled Chicken Club", price: "$12.95", desc: "w/ Bacon, Lettuce, Tomato, & Cheese" },
      { name: "Roast Beef Club", price: "$12.95", desc: "w/ Bacon, Lettuce & Tomato" },
      { name: "Cheeseburger Club", price: "$12.95", desc: "w/ Bacon, Lettuce & Tomato" },
      { name: "Chicken Salad Club", price: "$12.95", desc: "w/ Bacon, Lettuce, & Tomato" },
      { name: "Tuna Salad Club", price: "$12.95", desc: "w/ Sliced Egg, Lettuce, & Tomato" },
      { name: "Roast Turkey Club", price: "$12.95", desc: "w/ Bacon, Lettuce & Tomato" },
      { name: "Grilled Mozzarella Cheese", price: "$10.95", desc: "On Rye w/ Bacon & Tomato" },
      { name: "Roast Beef Sub", price: "$12.95", desc: "w/ Cheese, Lettuce, Tomato, & Mayo" },
      { name: "Philly Cheese Steak Sub", price: "$12.95", desc: "w/ Grilled Peppers & Onions" },
    ]
  },
  {
    category: "Lunch Sandwiches",
    sectionDesc: "Have it on a Hard Roll, White Toast, Whole Wheat Toast, or Rye Toast. Make it a Sub for $1.00",
    items: [
      { name: "Egg Salad Sandwich", price: "$7.95", desc: "w/ Lettuce & Mayo" },
      { name: "Roast Beef Sandwich", price: "$10.95", desc: "w/ Lettuce & Mayo" },
      { name: "Tuna or Chicken Salad Sandwich", price: "$9.95", desc: "" },
      { name: "Turkey Sandwich", price: "$9.95", desc: "w/ Lettuce & Mayo" },
      { name: "Bacon, Lettuce, & Tomato", price: "$8.95", desc: "" },
      { name: "Cheese Sandwich", price: "$7.25", desc: "w/ Lettuce & Mayo" },
      { name: "Grilled Cheese Sandwich", price: "$5.95", desc: "" },
      { name: "Grilled Cheese Sandwich w/ Tomato", price: "$6.95", desc: "" },
      { name: "Grilled Cheese Sandwich w/ Ham or Bacon", price: "$8.50", desc: "" },
      { name: "Grilled Chicken on a Hard Roll", price: "$9.50", desc: "w/ Lettuce, Tomato, & Mayo" },
      { name: "Ham Sandwich", price: "$8.25", desc: "w/ Lettuce & Mayo or Mustard" },
      { name: "Ham Sandwich w/ Cheese", price: "$8.95", desc: "w/ Lettuce & Mayo or Mustard" },
      { name: "Happy Waitress", price: "$10.95", desc: "Open Grilled Cheese w/ Tomato & Bacon" },
      { name: "Hot Corn Beef or Pastrami", price: "$10.25", desc: "w/ Mustard on Rye" },
      { name: "Corn Beef or Pastrami Reuben", price: "$12.95", desc: "w/ French Fries" },
    ]
  },
  {
    category: "Greek Platters",
    sectionDesc: "Add Egg to Gyro for $1.00* | *Make any Chicken in Greek Platters Cajun for $0.75",
    items: [
      { name: "Gyro Platter", price: "$15.95", desc: "w/ Greek Salad & French Fries" },
      { name: "Chicken Souvlaki Platter", price: "$15.95", desc: "w/ Greek Salad & French Fries" },
      { name: "Gyro Sandwich", price: "$9.25", desc: "" },
      { name: "Chicken Souvlaki Sandwich", price: "$9.25", desc: "" },
      { name: "Chicken Souvlaki Sandwich w/ Cajun Chicken", price: "$9.75", desc: "" },
    ]
  },
  {
    category: "Burgers & Hot Dogs",
    sectionDesc: [
        "All Burgers & Hot Dogs are Served with Pickles and Coleslaw",
        "Add to any burger: Bacon - $2.95 | Sauteed Onions - $1.50 | Fried Egg - $1.00 | Taylor Ham - $3.00 | Mushrooms - $1.50"
    ],
    items: [
      { name: "The Little Brother Burger", price: "$7.95", desc: "6 oz. Patty" },
      { name: "The Little Brother Burger w/ Cheese", price: "$8.50", desc: "6 oz. Patty" },
      { name: "The Little Brother Burger Deluxe", price: "$9.95", desc: "6 oz. Patty w/ Lettuce, Tomato, Mayo, & Side of Fries" },
      { name: "The Little Brother Burger Deluxe w/Cheese", price: "$10.95", desc: "6 oz. Patty w/ Lettuce, Tomato, Mayo, & Side of Fries" },
      { name: "The Big Brother Burger", price: "$8.50", desc: "8 oz. Patty" },
      { name: "The Big Brother Burger w/ Cheese", price: "$8.95", desc: "8 oz. Patty" },
      { name: "The Big Brother Burger Deluxe", price: "$11.50", desc: "8 oz. Patty w/ Lettuce, Tomato, Mayo, & Side of Fries" },
      { name: "The Big Brother Burger Deluxe w/Cheese", price: "$11.95", desc: "8 oz. Patty w/ Lettuce, Tomato, Mayo, & Side of Fries" },
      { name: "Turkey Burger", price: "$7.25", desc: "" },
      { name: "Turkey Burger Deluxe", price: "$10.95", desc: "w/ Lettuce, Tomato, Mayo, & Side of Fries" },
      { name: "Bacon Burger", price: "$9,95", desc: "w/ Lettuce & Tomato" },
      { name: "Bacon Burger w/ Cheese", price: "$10.25", desc: "w/ Lettuce & Tomato" },
      { name: "Bacon Burger Deluxe", price: "$11.95", desc: "6 oz. Patty w/ Lettuce, Tomato, Mayo, & Side of Fries" },
      { name: "Bacon Burger Deluxe w/Cheese", price: "$12.95", desc: "6 oz. Patty w/ Lettuce, Tomato, Mayo, & Side of Fries" },
      { name: "Hot Dog", price: "$5.95", desc: "w/ Sauerkraut or Sauteed Onions" },
      { name: "Hot Dog wrapped in Pita Bread", price: "$8.25", desc: "w/ Cheese & Side of Fries" },
    ]
  },
  {
    category: "Early Dinners",
    sectionDesc: [
        "Served w/ Soup or Salad, Potato, & Vegetable (Except Chicken Fingers)",
        "Add $0.75 for Cajun Chicken or Cajun Shrimp"
    ],
    items: [
      { name: "Baked Virginia Ham", price: "$13.95", desc: "" },
      { name: "Chicken Fingers", price: "$12.50", desc: "w/ French Fries & Cole Slaw" },
      { name: "Chopped Sirloin", price: "$13.95", desc: "" },
      { name: "Fried Flounder", price: "$13.95", desc: "" },
      { name: "Grilled Chicken", price: "$13.95", desc: "" },
      { name: "Hot Open Roast Beef", price: "$13.95", desc: "" },
      { name: "Hot Open Turkey", price: "$13.95", desc: "" },
      { name: "Grilled Chicken & Rice", price: "$15.95", desc: "" },
      { name: "Grilled Shrimp & Rice", price: "$15.95", desc: "" },
    ]
  },
  {
    category: "Children's Menu",
    sectionDesc: [
        "Must be 8 and under",
        "All plates come with Small Juice or Milk"
    ],
    items: [
      { name: "Mickey Mouse", price: "$9.95", desc: "Pancakes w/ Fruit" },
      { name: "Winnie The Pooh", price: "$9.95", desc: "French Toast w/ Fruit" },
      { name: "Donald Duck", price: "$9.95", desc: "Chicken Fingers w/ French Fries & Honey Mustard" },
      { name: "Simba", price: "$9.95", desc: "Hamburger w/ French Fries" },
      { name: "Goofy", price: "$9.95", desc: "One Hot Dog w/ French Fries" },
      { name: "Daisy", price: "$9.95", desc: "Tuna Sandwich w/ French Fries" },
      { name: "Pluto", price: "$9.95", desc: "Grilled Cheese w/ French Fries" },
    ]
  },
  {
    category: "Side Orders",
    sectionDesc: "",
    items: [
      { name: "Vegetable Side", price: "$3.50", desc: "" },
      { name: "French Fries", price: "$4.50", desc: "" },
      { name: "French Fries w/ Cheese", price: "$5.50", desc: "" },
      { name: "French Fries w/ Cheese & Gravy", price: "$6.25", desc: "" },
      { name: "Mashed Potatoes", price: "$2.95", desc: "" },
      { name: "Onion Rings", price: "$4.95", desc: "" },
      { name: "Mozzarella Sticks", price: "$7.25", desc: "" },
      { name: "Homemade Cole Slaw", price: "$3.95", desc: "" },
      { name: "Grilled Chicken", price: "$7.95", desc: "" },
      { name: "Grilled Shrimp", price: "$9.95", desc: "" },
    ]
  },
  {
    category: "Beverages",
    sectionDesc: "",
    items: [
      { name: "Coffee or Tea", price: "$2.15", desc: "1 Free Refill" },
      { name: "Coffee To Go (Small)", price: "$2.25", desc: "" },
      { name: "Coffee To Go (Large)", price: "$2.50", desc: "" },
      { name: "Unsweetened Iced Tea", price: "$2.95", desc: "" },
      { name: "Chocolate Milk (Small)", price: "$2.95", desc: "" },
      { name: "Chocolate Milk (Large)", price: "$3.50", desc: "" },
      { name: "Hot Chocolate", price: "$3.95", desc: "Made w/ Milk & Whipped Cream" },
      { name: "Orange Juice", price: "$3.95", desc: "" },
      { name: "Grapefruit Juice", price: "$3.95", desc: "" },
      { name: "Apple Juice", price: "$3.95", desc: "" },
      { name: "Cranberry Juice", price: "$3.95", desc: "" },
      { name: "Fountain Pepsi", price: "$2.75", desc: "" },
      { name: "Canned Pepsi", price: "$2.25", desc: "" },
      { name: "Bottled Water (Small)", price: "$1.65", desc: "" },
      { name: "Bottled Water (Large)", price: "$1.95", desc: "" },
      { name: "Snapple", price: "$2.95", desc: "" },
      { name: "Can Juice", price: "$2.95", desc: "" },
    ]
  },
  {
    category: "Desserts",
    sectionDesc: "",
    items: [
      { name: "Chocolate Cake", price: "$3.25", desc: "" },
      { name: "Antonia's Homemade Cheese Cake", price: "$4.50", desc: "" },
      { name: "Antonia's Homemade Cheese Cake w/ Fresh Strawberries", price: "$5.95", desc: "" },
      { name: "Rice Pudding", price: "$3.50", desc: "" },
      { name: "Rice Pudding w/ Fresh Strawberries", price: "$4.95", desc: "" },
      { name: "Fresh Fruit Salad", price: "$6.25", desc: "" },
      { name: "Fresh Fruit Salad w/ Whipped Cream", price: "$7.25", desc: "" },
    ]
  },
];

// Announcement Title and Message
const ANNOUNCEMENT = {
  active: true,
  title: "CLOSED FOR VACATION 8/9-8/28",
  message: "The owner and his family will be in Greece for vacation this August. We will be closed starting Sunday, August 9 and will reopen Saturday, August 29. We will see you when we get back!",
  type: "warning"
};

const SLIDESHOW_IMAGES = [
  {
    url: "https://res.cloudinary.com/yba87ogp/image/upload/v1785444885/IMG_9397_s5qfya.jpg",
    title: "Storefront",
    subtitle: ""
  },
];

export default function App() {
  const [showModal, setShowModal] = useState(false);

  // State to track which menu sections are open.
  const [openSections, setOpenSections] = useState({});

  // Track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play the slideshow every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === SLIDESHOW_IMAGES.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Simple functions for the Next/Prev arrows
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === SLIDESHOW_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDESHOW_IMAGES.length - 1 : prev - 1));
  };

  // Trigger the pop-up every time the page loads or refreshes
  useEffect(() => {
    if (ANNOUNCEMENT.active) {
      setShowModal(true);
    }
  }, []);

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">

        {/* Announcement Modal Pop-Up */}
        {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
              <div className="bg-white rounded-2xl max-w-md w-full p-6">

                {/* Header / Icon */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2 text-red-600">
                    <span className="text-2xl">🚨</span>
                    <h3 className="font-bold text-xl text-gray-900">
                      {ANNOUNCEMENT.title}
                    </h3>
                  </div>
                  <button
                      onClick={() => setShowModal(false)}
                      className="text-gray-400 hover:text-gray-600 font-bold text-xl px-2"
                      aria-label="Close modal"
                  >
                    ✕
                  </button>
                </div>

                {/* Message Content */}
                <p className="mt-4 text-gray-700 leading-relaxed whitespace-pre-line">
                  {ANNOUNCEMENT.message}
                </p>

                {/* Dismiss Button */}
                <div className="mt-6">
                  <button
                      onClick={() => setShowModal(false)}
                      className="w-full bg-black hover:bg-gray-500 text-white font-semibold py-3 px-4 rounded-xl transition shadow-md"
                  >
                    Got It
                  </button>
                </div>

              </div>
            </div>
        )}

        {/* --- NAVBAR --- */}
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-red-800">3 Brothers Restaurant</h1>
            <div className="space-x-6 hidden sm:block">
              <a href="#menu" className="hover:text-red-600 font-medium">Menu</a>
              <a href="#about" className="hover:text-red-600 font-medium">About</a>
              <a href="#contact" className="hover:text-red-600 font-medium">Hours & Contact</a>
            </div>
          </div>
        </nav>

        {/* --- HERO SECTION --- */}
        <header className="relative bg-red-800 text-white py-20 text-center overflow-hidden">

          {/* Background Image Overlay */}
          <div
              className="absolute inset-0 opacity-20 bg-cover bg-center"
              style={{ backgroundImage: "url('/header-bg.jpg')" }}
          />

          {/* Text & Button Wrapper (z-10 puts it ON TOP of the background) */}
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to 3 Brothers Restaurant</h2>
            <p className="text-lg md:text-xl text-gray-300">Local breakfast and lunch restaurant in Dover, New Jersey</p>
            <a href="#menu" className="mt-8 inline-block bg-white text-red-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg">
              View Our Menu
            </a>
          </div>

        </header>

        {/* --- FEATURED FOOD SLIDESHOW --- */}
        <section className="bg-gray-200 py-12 px-4">
          <div className="max-w-4xl mx-auto">

            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-600 tracking-tight">
                Photo Gallery
              </h3>
            </div>

            {/* Slideshow Container */}
            <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-800 group">

              {/* Background Image */}
              <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
                  style={{ backgroundImage: `url('${SLIDESHOW_IMAGES[currentSlide].url}')` }}
              />

              {/* Dark Gradient Overlay for Readable Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6 text-white text-center sm:text-left">
                <h4 className="text-xl md:text-2xl font-bold">
                  {SLIDESHOW_IMAGES[currentSlide].title}
                </h4>
                <p className="text-gray-300 text-sm md:text-base mt-1">
                  {SLIDESHOW_IMAGES[currentSlide].subtitle}
                </p>
              </div>

              {/* Left Arrow Button */}
              <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl transition opacity-80 hover:opacity-100"
                  aria-label="Previous image"
              >
                &#10094;
              </button>

              {/* Right Arrow Button */}
              <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl transition opacity-80 hover:opacity-100"
                  aria-label="Next image"
              >
                &#10095;
              </button>

              {/* Slide Navigation Dots */}
              <div className="absolute top-4 right-4 flex space-x-2">
                {SLIDESHOW_IMAGES.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                            currentSlide === idx ? "bg-white w-6" : "bg-white/50"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* --- MENU --- */}
        <section id="menu" className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h3 className="text-4xl font-bold mb-10 text-center text-gray-600">Our Menu</h3>

            {/* Map through the categories for Accordion */}
            <div className="space-y-4">
              {menuData.map((section, index) => {
                const isOpen = openSections[index];

                return (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">

                      {/* Category Header (Clickable) */}
                      <button
                          onClick={() => toggleSection(index)}
                          className="w-full flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition-colors px-6 py-4 text-left"
                      >
                        <h4 className="text-xl font-bold text-red-800 uppercase tracking-wide">
                          {section.category}
                        </h4>
                        {/* Simple Plus/Minus Icon Indicator */}
                        <span className="text-red-800 font-bold text-2xl leading-none">
                      {isOpen ? "−" : "+"}
                    </span>
                      </button>

                      {/* Dropdown Content */}
                      {isOpen && (
                          <div className="px-6 py-6 bg-white">

                            {/* Section Description (Supports single strings or multi-line arrays) */}
                            {section.sectionDesc && (
                                <div className="text-sm text-red-700 font-semibold italic mb-6 border-l-4 border-red-700 pl-3 space-y-1">
                                  {Array.isArray(section.sectionDesc) ? (
                                      section.sectionDesc.map((line, idx) => (
                                          <p key={idx}>{line}</p>
                                      ))
                                  ) : (
                                      <p>{section.sectionDesc}</p>
                                  )}
                                </div>
                            )}

                            {/* Items List (Single Column) */}
                            <div className="grid grid-cols-1 gap-y-6">
                              {section.items.map((item, itemIndex) => (
                                  <div key={itemIndex} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                                    <div className="flex justify-between items-start mb-1">
                                      <h5 className="text-lg font-bold text-gray-800 pr-4">{item.name}</h5>
                                      <span className="text-lg font-bold text-red-900 whitespace-nowrap">{item.price}</span>
                                    </div>
                                    {item.desc && <p className="text-gray-500 text-sm leading-snug">{item.desc}</p>}
                                  </div>
                              ))}
                            </div>

                          </div>
                      )}

                    </div>
                );
              })}
            </div>

            {/* Menu Footer Note */}
            <div className="text-center mt-10 text-gray-500 text-sm italic">
              <p>NJ State Sales tax is not included in the prices in this Menu therefore 6.625% will be added to the total of your check.</p>
              <p>To-go orders are subject to a $0.50 charge per container due to cost of packaging material</p>
              <p className="mt-1">Prices are subject to change without notice.</p>
              <p>Thank you for understanding, we appreciate your business!</p>
            </div>
          </div>
        </section>

        {/* --- ABOUT US --- */}
        <section id="about" className="py-16 bg-gray-50 max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6 text-gray-900">About Us</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            We are a family-owned restaurant founded in 1982. Our customers are like family to us and we will treat any new customer accordingly.
            We are located right off of Blackwell Street in Dover, New Jersey. We serve typical diner food for breakfast and lunch, but we have some ingredients
            and dishes from other areas of the world such as Costa Rica and Greece. Our restaurant is cozy and calm, so feel free to come by, relax,
            and enjoy some good food in the company of great people!
          </p>
        </section>

        {/* --- CONTACT & HOURS (FOOTER) --- */}
        <footer id="contact" className="bg-red-800 text-gray-300 py-12">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">

            {/* Hours */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-4">Hours</h4>
              <ul className="space-y-2">
                <li>Monday - Saturday: 6:00 AM - 3:00 PM</li>
                <li>Friday - Saturday: 7:00 AM - 3:00 PM</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li>📍 9 North Morris St, Dover, NJ 07801</li>
                <li>📞 (973) 442-1916</li>
              </ul>
            </div>

          </div>
          <div className="mt-8 text-center border-t border-red-700 pt-8 text-sm">
            &copy; {new Date().getFullYear()} 3 Brothers Restaurant. All rights reserved.
          </div>
        </footer>

      </div>
  );
}