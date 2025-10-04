import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
   				border: 'var(--border)',
   				input: 'var(--input)',
   				ring: 'var(--ring)',
   				background: 'var(--background)',
   				foreground: 'var(--foreground)',
   				primary: {
   					DEFAULT: 'var(--primary)',
   					foreground: 'var(--primary-foreground)',
   					hover: 'var(--primary-hover)'
   				},
   				secondary: {
   					DEFAULT: 'var(--secondary)',
   					foreground: 'var(--secondary-foreground)'
   				},
   				destructive: {
   					DEFAULT: 'var(--destructive)',
   					foreground: 'var(--destructive-foreground)'
   				},
   				muted: {
   					DEFAULT: 'var(--muted)',
   					foreground: 'var(--muted-foreground)'
   				},
   				accent: {
   					DEFAULT: 'var(--accent)',
   					foreground: 'var(--accent-foreground)'
   				},
   				popover: {
   					DEFAULT: 'var(--popover)',
   					foreground: 'var(--popover-foreground)'
   				},
   				card: {
   					DEFAULT: 'var(--card)',
   					foreground: 'var(--card-foreground)'
   				},
   				gradient: {
   					start: 'var(--gradient-start)',
   					end: 'var(--gradient-end)'
   				},
   				sidebar: {
   					DEFAULT: 'var(--sidebar-background)',
   					foreground: 'var(--sidebar-foreground)',
   					primary: 'var(--sidebar-primary)',
   					'primary-foreground': 'var(--sidebar-primary-foreground)',
   					accent: 'var(--sidebar-accent)',
   					'accent-foreground': 'var(--sidebar-accent-foreground)',
   					border: 'var(--sidebar-border)',
   					ring: 'var(--sidebar-ring)'
   				},
   				chart: {
   					'1': 'var(--chart-1)',
   					'2': 'var(--chart-2)',
   					'3': 'var(--chart-3)',
   					'4': 'var(--chart-4)',
   					'5': 'var(--chart-5)'
   				}
   			},
    		fontFamily: {
    			sans: [
    				'Inter',
    				'system-ui',
    				'-apple-system',
    				'sans-serif'
    			]
    		},
    		fontSize: {
    			xs: 'var(--font-size-xs)',
    			sm: 'var(--font-size-sm)',
    			base: 'var(--font-size-base)',
    			lg: 'var(--font-size-lg)',
    			xl: 'var(--font-size-xl)',
    			'2xl': 'var(--font-size-2xl)',
    			'3xl': 'var(--font-size-3xl)',
    			'4xl': '2.25rem',
    			'5xl': '3rem',
    			'6xl': '3.75rem'
    		},
    		spacing: {
    			xs: 'var(--spacing-xs)',
    			sm: 'var(--spacing-sm)',
    			md: 'var(--spacing-md)',
    			lg: 'var(--spacing-lg)',
    			xl: 'var(--spacing-xl)',
    			'2xl': 'var(--spacing-2xl)',
    			'3xl': 'var(--spacing-3xl)'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		backgroundImage: {
    			'gradient-primary': 'var(--gradient-primary)',
    			'gradient-subtle': 'var(--gradient-subtle)',
    			'gradient-hero': 'var(--gradient-hero)'
    		},
    		boxShadow: {
    			sm: 'var(--shadow-sm)',
    			md: 'var(--shadow-md)',
    			lg: 'var(--shadow-lg)',
    			xl: 'var(--shadow-xl)'
    		},
    		transitionDuration: {
    			fast: 'var(--transition-fast)',
    			base: 'var(--transition-base)',
    			slow: 'var(--transition-slow)'
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
    			'fade-in-up': {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(20px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			'slide-in': {
    				'0%': {
    					opacity: '0',
    					transform: 'translateX(-20px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateX(0)'
    				}
    			},
    			'pulse-subtle': {
    				'0%, 100%': {
    					opacity: '1'
    				},
    				'50%': {
    					opacity: '0.8',
    					transform: 'scale(1.05)'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			'fade-in': 'fade-in 0.5s ease-out forwards',
    			'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
    			'slide-in': 'slide-in 0.5s ease-out forwards',
    			'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
