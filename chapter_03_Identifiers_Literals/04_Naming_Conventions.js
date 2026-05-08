// Comprehensive JavaScript Naming Conventions File
// This file demonstrates different types of cases used in programming

console.log("=== JavaScript and Programming Naming Conventions ===\n");

// 1. camelCase
console.log("1. camelCase");
console.log("Description: First word starts with lowercase, subsequent words capitalized");
console.log("Usage: Variables, functions, methods, object properties");

let firstName = "John";
let lastName = "Doe";
let userEmail = "john@example.com";
let totalPrice = 99.99;
let isActive = true;

function calculateTotalPrice() {
    return totalPrice * 1.1; // with tax
}

const getUserName = () => {
    return `${firstName} ${lastName}`;
};

console.log("Examples:");
console.log("firstName:", firstName);
console.log("lastName:", lastName);
console.log("userEmail:", userEmail);
console.log("totalPrice:", totalPrice);
console.log("isActive:", isActive);
console.log("calculateTotalPrice():", calculateTotalPrice());
console.log("getUserName():", getUserName());

// 2. PascalCase (UpperCamelCase)
console.log("\n2. PascalCase (UpperCamelCase)");
console.log("Description: First letter of each word is capitalized");
console.log("Usage: Classes, constructors, React components");

class UserAccount {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    displayInfo() {
        console.log(`${this.name} - ${this.email}`);
    }
}

class ProductManager {
    constructor(productName) {
        this.productName = productName;
    }
}

function CreateServer() {
    return { port: 3000 };
}

// React component example (conceptual)
const UserProfile = ({ name, email }) => {
    return { name, email };
};

console.log("Examples:");
console.log("class UserAccount");
console.log("class ProductManager");
console.log("function CreateServer");
console.log("const UserProfile (React component)");

let userAccount = new UserAccount("Alice", "alice@example.com");
console.log("Object created:", userAccount);

// 3. snake_case
console.log("\n3. snake_case");
console.log("Description: Words separated by underscores, all lowercase");
console.log("Usage: Database columns, constants (sometimes), Python variables");

let first_name = "Bob";
let last_name = "Smith";
let user_email = "bob@example.com";
let total_price = 149.99;
let is_active = true;

let database_user = {
    user_id: 1,
    first_name: first_name,
    last_name: last_name,
    email_address: user_email,
    account_status: "active"
};

console.log("Examples:");
console.log("first_name:", first_name);
console.log("last_name:", last_name);
console.log("user_email:", user_email);
console.log("total_price:", total_price);
console.log("is_active:", is_active);
console.log("database_user object:", database_user);

// 4. UPPER_SNAKE_CASE
console.log("\n4. UPPER_SNAKE_CASE");
console.log("Description: All uppercase letters with underscores between words");
console.log("Usage: Constants, environment variables, configuration values");

const MAX_USER_TRIES = 5;
const MIN_PASSWORD_LENGTH = 8;
const API_BASE_URL = "https://api.example.com";
const DATABASE_HOST = "localhost";
const DATABASE_PORT = 5432;
const MAX_TIMEOUT_MS = 30000;
const DEFAULT_LANGUAGE = "en-US";

console.log("Examples:");
console.log("MAX_USER_TRIES:", MAX_USER_TRIES);
console.log("MIN_PASSWORD_LENGTH:", MIN_PASSWORD_LENGTH);
console.log("API_BASE_URL:", API_BASE_URL);
console.log("DATABASE_HOST:", DATABASE_HOST);
console.log("DATABASE_PORT:", DATABASE_PORT);
console.log("MAX_TIMEOUT_MS:", MAX_TIMEOUT_MS);
console.log("DEFAULT_LANGUAGE:", DEFAULT_LANGUAGE);

// 5. kebab-case
console.log("\n5. kebab-case");
console.log("Description: Words separated by hyphens, all lowercase");
console.log("Usage: HTML attributes, CSS class names, URL slugs, filenames");
console.log("Note: Cannot be used directly for JavaScript variable names");

// CSS class example (as string)
let cssClasses = [
    ".user-profile",
    ".primary-button",
    ".sidebar-navigation",
    ".modal-dialog",
    ".form-control"
];

// URL slug example
let urlSlugs = [
    "/user-profile",
    "/blog-post-title",
    "/contact-us",
    "/privacy-policy"
];

// HTML attribute example (as string)
let htmlData = {
    "data-user-id": 123,
    "data-product-name": "laptop",
    "aria-label": "close-button"
};

// Filename example
let filesWithKebabCase = [
    "user-profile.js",
    "navigation-menu.js",
    "form-validator.js",
    "api-client.js"
];

console.log("Examples:");
console.log("CSS classes:", cssClasses);
console.log("URL slugs:", urlSlugs);
console.log("HTML data attributes:", htmlData);
console.log("Filenames:", filesWithKebabCase);

// 6. dot.case
console.log("\n6. dot.case");
console.log("Description: Words separated by dots");
console.log("Usage: Configuration keys, namespaces, module paths");

let config = {
    "app.name": "MyApp",
    "app.version": "1.0.0",
    "app.debug": true,
    "database.host": "localhost",
    "database.port": 5432,
    "database.name": "myapp_db",
    "jwt.secret": "your-secret-key",
    "jwt.expiry": "24h"
};

console.log("Examples (configuration object):");
console.log(config);

// 7. SCREAMING_SNAKE_CASE (Alternative to UPPER_SNAKE_CASE)
console.log("\n7. SCREAMING_SNAKE_CASE");
console.log("Description: Same as UPPER_SNAKE_CASE");
console.log("Usage: Constants, enums, magic numbers");

const INITIAL_STATE = 0;
const SUCCESS_STATUS = 200;
const ERROR_STATUS = 500;
const NOT_FOUND_STATUS = 404;

console.log("Examples:");
console.log("INITIAL_STATE:", INITIAL_STATE);
console.log("SUCCESS_STATUS:", SUCCESS_STATUS);
console.log("ERROR_STATUS:", ERROR_STATUS);
console.log("NOT_FOUND_STATUS:", NOT_FOUND_STATUS);

// 8. flatcase
console.log("\n8. flatcase");
console.log("Description: All lowercase, no separators");
console.log("Usage: Filenames, module names, package names");

let packageNames = [
    "lodash",
    "express",
    "react",
    "axios",
    "moment"
];

let moduleNames = [
    "userservice",
    "authmanager",
    "database",
    "logger"
];

console.log("Examples:");
console.log("Package names:", packageNames);
console.log("Module names:", moduleNames);

// 9. PascalCase Enum Example
console.log("\n9. PascalCase for Enums");
console.log("Description: Enum keys are usually in UPPER_SNAKE_CASE or PascalCase");

const UserStatus = {
    ACTIVE: "active",
    INACTIVE: "inactive",
    PENDING: "pending",
    DELETED: "deleted"
};

const OrderStatus = {
    Pending: "pending",
    Confirmed: "confirmed",
    Shipped: "shipped",
    Delivered: "delivered",
    Cancelled: "cancelled"
};

console.log("Examples:");
console.log("UserStatus:", UserStatus);
console.log("OrderStatus:", OrderStatus);

// Comparison Table
console.log("\n=== Naming Conventions Comparison ===");
console.log("Format              | Example              | Common Usage");
console.log("-".repeat(70));
console.log("camelCase           | firstName            | variables, functions");
console.log("PascalCase          | FirstName            | classes, components");
console.log("snake_case          | first_name           | database columns");
console.log("UPPER_SNAKE_CASE    | FIRST_NAME           | constants");
console.log("kebab-case          | first-name           | CSS, URLs, filenames");
console.log("dot.case            | first.name           | configuration keys");
console.log("flatcase            | firstname            | package names");

// Real-world Examples
console.log("\n=== Real-World Examples ===");

// JavaScript/Node.js
console.log("JavaScript/Node.js:");
console.log("Variables: camelCase (userName, totalPrice)");
console.log("Classes: PascalCase (UserAccount, ProductManager)");
console.log("Constants: UPPER_SNAKE_CASE (MAX_RETRIES, API_KEY)");

// Database
console.log("\nDatabase:");
console.log("Columns: snake_case (user_id, first_name, email_address)");
console.log("Tables: snake_case or lowercase (users, user_accounts)");

// Frontend (HTML/CSS)
console.log("\nFrontend (HTML/CSS):");
console.log("CSS classes: kebab-case (.primary-button, .user-profile)");
console.log("HTML attributes: kebab-case (data-user-id, aria-label)");

// URLs and APIs
console.log("\nURLs and APIs:");
console.log("URL paths: kebab-case (/user-profile, /blog-posts)");
console.log("API parameters: camelCase (firstName, lastName)");

// Best Practices
console.log("\n=== Best Practices ===");
console.log("✓ Use camelCase for most JavaScript variables and functions");
console.log("✓ Use PascalCase for class names and React components");
console.log("✓ Use UPPER_SNAKE_CASE for constants");
console.log("✓ Use snake_case for database columns and some config files");
console.log("✓ Use kebab-case for CSS classes and URL slugs");
console.log("✓ Be consistent within your project");
console.log("✓ Follow the conventions of the language/framework you're using");
console.log("✓ Use meaningful, descriptive names (not abbreviated)");
console.log("✓ Avoid starting with numbers or special characters");

// Summary
console.log("\n=== Summary ===");
let summary = {
    "camelCase": "Variables, functions, methods",
    "PascalCase": "Classes, constructors, components",
    "snake_case": "Database, some configs",
    "UPPER_SNAKE_CASE": "Constants, environment variables",
    "kebab-case": "CSS, URLs, filenames, HTML",
    "dot.case": "Configuration keys, namespaces",
    "flatcase": "Package names, modules"
};

Object.entries(summary).forEach(([caseType, usage]) => {
    console.log(`${caseType}: ${usage}`);
});

console.log("\nThis file demonstrates all major naming conventions in programming!");