// This file contains type declarations for modules that don't have their own type definitions

declare module 'react-router-dom' {
  import * as React from 'react';
  
  export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string;
    replace?: boolean;
    state?: any;
  }
  
  export const Link: React.FC<LinkProps>;
  
  export interface RouteProps {
    path?: string;
    element?: React.ReactNode;
  }
  
  export const Route: React.FC<RouteProps>;
  
  export interface RoutesProps {
    children?: React.ReactNode;
  }
  
  export const Routes: React.FC<RoutesProps>;
  
  export interface BrowserRouterProps {
    children?: React.ReactNode;
  }
  
  export const BrowserRouter: React.FC<BrowserRouterProps>;
  
  export function useParams<T extends Record<string, string | undefined>>(): T;
  export function useNavigate(): (to: string, options?: { replace?: boolean; state?: any }) => void;
  export function useLocation(): { pathname: string; search: string; hash: string; state: any };
}

declare module 'lucide-react' {
  import * as React from 'react';
  
  export interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: number | string;
    color?: string;
    stroke?: string | number;
  }
  
  export type Icon = React.FC<IconProps>;
  
  export const ChevronLeft: Icon;
  export const ChevronRight: Icon;
  export const ArrowLeft: Icon;
}

declare module '@tanstack/react-query' {
  export interface QueryClientConfig {
    defaultOptions?: {
      queries?: any;
      mutations?: any;
    };
  }
  
  export class QueryClient {
    constructor(config?: QueryClientConfig);
  }
  
  export interface QueryClientProviderProps {
    client: QueryClient;
    children?: React.ReactNode;
  }
  
  export const QueryClientProvider: React.FC<QueryClientProviderProps>;
}