export const ROUTE_AUTH_CALLBACK = "/auth-callback";

export const ROUTE_CONFIGURE_UPLOAD = "/configure/upload";

export function ROUTE_CONFIGURE_DESIGN(caseConfigurationId: string) {
  return `/configure/design?id=${caseConfigurationId}`;
}

export function ROUTE_CONFIGURE_PREVIEW(caseConfigurationId: string) {
  return `/configure/preview?id=${caseConfigurationId}`;
}

export function ROUTE_THANKYOU(orderId: string) {
  return `/thank-you?orderId=${orderId}`;
}

export const ROUTE_DASHBOARD = "/dashboard";
