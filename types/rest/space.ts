type SpaceRestApiMap = {
  GetSpace: {
    method: "GET";
    endpoint: "space";
    parameters: { id: string | number };
    response: {
      id: string;
      name: string;
      defaultThread: string;
      isPrivate: boolean;
      creator: {
        code: string;
        name: string;
      };
      modifier: {
        code: string;
        name: string;
      };
      memberCount: string;
      coverType: "BLOB" | "PRESET";
      coverKey: string;
      coverUrl: string;
      body: string;
      useMultiThread: boolean;
      isGuest: boolean;
      attachedApps: Array<{
        threadId: string;
        appId: string;
        code: string;
        name: string;
        description: string;
        createdAt: string;
        creator: {
          code: string;
          name: string;
        };
        modifiedAt: string;
        modifier: {
          code: string;
          name: string;
        };
      }>;
      fixedMember: boolean;
      showAnnouncement: boolean | null;
      showThreadList: boolean | null;
      showAppList: boolean | null;
      showMemberList: boolean | null;
      showRelatedLinkList: boolean | null;
    };
  };
  DeleteSpace: {
    method: "DELETE";
    endpoint: "space";
    parameters: { id: string };
    response: Record<string, never>;
  };
  PostTemplateSpace: {
    method: "POST";
    endpoint: "template/space";
    parameters: {
      id: string | number;
      name: string;
      members: Array<
        | {
            entity: {
              type: "USER" | "GROUP";
              code: string;
            };
            isAdmin?: boolean;
          }
        | {
            entity: {
              type: "ORGANIZATION";
              code: string;
            };
            isAdmin?: boolean;
            includeSubs?: boolean;
          }
      >;
      isPrivate?: boolean;
      isGuest?: boolean;
      fixedMember?: boolean;
    };
    response: {
      id: string;
    };
  };
  PutSpaceBody: {
    method: "PUT";
    endpoint: "space/body";
    parameters: {
      id: string | number;
      body: string;
    };
    response: Record<string, never>;
  };
  PutSpaceThread: {
    method: "PUT";
    endpoint: "space/thread";
    parameters: { id: string | number; name?: string; body?: string };
    response: Record<string, never>;
  };
  PostSpaceThreadComment: {
    method: "POST";
    endpoint: "space/thread/comment";
    parameters: {
      space: string | number;
      thread: string | number;
      comment: {
        text?: string;
        mentions?: Array<{
          code: string;
          type: "USER" | "GROUP" | "ORGANIZATION";
        }>;
        files?: Array<{
          fileKey: string;
          width: string | number;
        }>;
      };
    };
    response: { id: string };
  };
  GetSpaceMembers: {
    method: "GET";
    endpoint: "space/members";
    parameters: {
      id: string | number;
    };
    response: {
      members: Array<
        | {
            entity: {
              type: "USER";
              code: string;
            };
            isAdmin: boolean;
            isImplicit: boolean;
          }
        | {
            entity: {
              type: "USER" | "GROUP";
              code: string;
            };
            isAdmin: boolean;
          }
        | {
            entity: {
              type: "ORGANIZATION";
              code: string;
            };
            isAdmin: boolean;
            includeSubs: boolean;
          }
      >;
    };
  };
  PutSpaceMembers: {
    method: "PUT";
    endpoint: "space/members";
    parameters: {
      id: string | number;
      members: Array<
        | {
            entity: {
              type: "USER" | "GROUP";
              code: string;
            };
            isAdmin?: boolean;
          }
        | {
            entity: {
              type: "ORGANIZATION";
              code: string;
            };
            isAdmin?: boolean;
            includeSubs?: boolean;
          }
      >;
    };
    response: Record<string, never>;
  };
  PostGuests: {
    method: "POST";
    endpoint: "guests";
    parameters: {
      guests: Array<{
        code: string;
        password: string;
        timezone: string;
        locale?: "auto" | "ja" | "en" | "zh";
        image?: string;
        name: string;
        surNameReading?: string;
        givenNameReading?: string;
        company?: string;
        division?: string;
        phone?: string;
        callto?: string;
      }>;
    };
    response: Record<string, never>;
  };
  DeleteGuests: {
    method: "DELETE";
    endpoint: "guests";
    parameters: {
      guests: string[];
    };
    response: Record<string, never>;
  };
  PutSpaceGuests: {
    method: "PUT";
    endpoint: "space/guests";
    parameters: { id: string | number; guests: string[] };
    response: Record<string, never>;
  };
};

export { SpaceRestApiMap };
