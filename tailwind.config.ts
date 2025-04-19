
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for our fitness app with increased intensity
				"fitness-green": {
					light: "#E8F5E9",
					DEFAULT: "#4CAF50",
					dark: "#2E7D32"
				},
				"fitness-orange": {
					light: "#FFF3E0",
					DEFAULT: "#FF9800",
					dark: "#EF6C00"
				},
				"fitness-blue": {
					light: "#E3F2FD",
					DEFAULT: "#2196F3",
					dark: "#1565C0"
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'pulse-soft': {
					'0%, 100%': {
						opacity: '1',
					},
					'50%': {
						opacity: '0.7',
					},
				},
				'float-dumbbell': {
					'0%, 100%': {
						transform: 'translateY(0) rotate(0deg)'
					},
					'25%': {
						transform: 'translateY(-20px) rotate(5deg)'
					},
					'50%': {
						transform: 'translateY(0) rotate(0deg)'
					},
					'75%': {
						transform: 'translateY(20px) rotate(-5deg)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-25px)'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 15px rgba(76, 175, 80, 0.4), 0 0 30px rgba(33, 150, 243, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 25px rgba(76, 175, 80, 0.6), 0 0 50px rgba(33, 150, 243, 0.4)'
					}
				},
				'gradient-shift': {
					'0%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					},
					'100%': {
						backgroundPosition: '0% 50%'
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'pulse-soft': 'pulse-soft 3s infinite',
				'float-dumbbell': 'float-dumbbell 6s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 3s infinite',
				'gradient-shift': 'gradient-shift 8s ease infinite'
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				inter: ["Inter", "sans-serif"]
			},
			opacity: {
				'15': '0.15'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
