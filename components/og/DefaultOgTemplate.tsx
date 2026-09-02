import { OgTemplate } from "@/types/og-template";

export function DefaultOgTemplate({
    title,
    imageUrl,
    logoUrl,
    primaryColor
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                backgroundColor: "#07080C",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
                boxSizing: "border-box",
            }}
        >
            <img
                src={imageUrl}
                alt={title}
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "50px",
                    left: "80px",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#FFFFFF",
                    width: "76px",
                    height: "76px",
                    borderRadius: "16px",
                    boxSizing: "border-box",
                    border: `2px solid ${primaryColor}`,
                    boxShadow: `0 8px 22px ${primaryColor}40`,
                }}
            >
                <img
                    src={logoUrl}
                    alt="Logo"
                    width="76"
                    height="76"
                    style={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                    }}
                />
            </div>
        </div>
    );
}

