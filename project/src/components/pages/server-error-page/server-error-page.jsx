import React from 'react';

function ServerErrorPage() {
  return (
    <section className="not-found">
      <h1 className="not-found__heading not-found__heading--server-error">
        We&nbsp;are currently experiencing technical difficulties with our application. <br />
         Our team is&nbsp;actively working to&nbsp;fix the issue.
         We&nbsp;hope to&nbsp;have this resolved soon. <br />
         Thank you for your patience.
      </h1>
    </section>
  );
}

export default ServerErrorPage;
