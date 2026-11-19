/**
 * Download link utilities for Xtremerpie App Hub.
 * Supports Google Drive links, direct URLs, validation, and conversion to direct download links.
 */

export interface DownloadOption {
  label: string;
  url?: string;
  fileSize?: string;
  checksum?: string; // SHA256 checksum
  format?: "exe" | "portable" | "zip" | "apk" | "deb" | "tar" | "other";
  platform?: "windows" | "android" | "linux" | "macos" | "all";
  isPrimary?: boolean;
}

export interface DownloadsCollection {
  windowsInstaller?: DownloadOption;
  portable?: DownloadOption;
  zip?: DownloadOption;
  linux?: DownloadOption;
  android?: DownloadOption;
  [key: string]: DownloadOption | undefined;
}

/**
 * Parses Google Drive links and converts standard share/view links into direct download links.
 * Example input: https://drive.google.com/file/d/1A2B3C4D5E.../view?usp=sharing
 * Output: https://drive.google.com/uc?export=download&id=1A2B3C4D5E...
 */
export function formatDownloadUrl(url?: string): {
  isValid: boolean;
  downloadUrl: string;
  isGoogleDrive: boolean;
  isPlaceholder: boolean;
} {
  if (!url || typeof url !== "string") {
    return {
      isValid: false,
      downloadUrl: "",
      isGoogleDrive: false,
      isPlaceholder: false,
    };
  }

  const trimmed = url.trim();

  // Check if it's an unpopulated placeholder
  if (
    trimmed === "" ||
    trimmed.includes("PASTE_") ||
    trimmed.includes("PASTE_GOOGLE_DRIVE_LINK_HERE") ||
    trimmed.includes("PASTE_PORTABLE_LINK_HERE") ||
    trimmed.toLowerCase() === "coming_soon"
  ) {
    return {
      isValid: false,
      downloadUrl: "",
      isGoogleDrive: false,
      isPlaceholder: true,
    };
  }

  // Google Drive standard link parsing
  // Matches: /file/d/FILE_ID/view or /open?id=FILE_ID or ?id=FILE_ID
  const driveFileRegex = /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/;
  const driveOpenRegex = /drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/;
  const driveUcRegex = /drive\.google\.com\/uc\?.*id=([a-zA-Z0-9_-]+)/;

  const matchFile = trimmed.match(driveFileRegex);
  const matchOpen = trimmed.match(driveOpenRegex);
  const matchUc = trimmed.match(driveUcRegex);

  const fileId = matchFile?.[1] || matchOpen?.[1] || matchUc?.[1];

  if (fileId) {
    return {
      isValid: true,
      downloadUrl: `https://drive.google.com/uc?export=download&id=${fileId}`,
      isGoogleDrive: true,
      isPlaceholder: false,
    };
  }

  // General URL validation
  try {
    const parsed = new URL(trimmed);
    const isValid = parsed.protocol === "http:" || parsed.protocol === "https:";
    return {
      isValid,
      downloadUrl: trimmed,
      isGoogleDrive: trimmed.includes("drive.google.com"),
      isPlaceholder: false,
    };
  } catch {
    return {
      isValid: false,
      downloadUrl: trimmed,
      isGoogleDrive: false,
      isPlaceholder: false,
    };
  }
}

/**
 * Returns available valid download options for an app.
 */
export function getAvailableDownloads(downloads?: DownloadsCollection): {
  key: string;
  option: DownloadOption;
  downloadUrl: string;
  isGoogleDrive: boolean;
}[] {
  if (!downloads) return [];

  const results: {
    key: string;
    option: DownloadOption;
    downloadUrl: string;
    isGoogleDrive: boolean;
  }[] = [];

  for (const [key, option] of Object.entries(downloads)) {
    if (option && option.url) {
      const parsed = formatDownloadUrl(option.url);
      if (parsed.isValid) {
        results.push({
          key,
          option,
          downloadUrl: parsed.downloadUrl,
          isGoogleDrive: parsed.isGoogleDrive,
        });
      }
    }
  }

  return results;
}
