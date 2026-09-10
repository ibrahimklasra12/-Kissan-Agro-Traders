import os
import subprocess
import json

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_DIR = os.path.join(BASE_DIR, 'src', 'assets', 'images')
VID_DIR = os.path.join(BASE_DIR, 'public', 'videos')
TMP_DIR = '/tmp/kissan_render'
os.makedirs(TMP_DIR, exist_ok=True)
os.makedirs(VID_DIR, exist_ok=True)

# Image paths
shot1 = os.path.join(IMG_DIR, 'shot1_wide_rice_field_1789046580586.jpg')
shot2 = os.path.join(IMG_DIR, 'shot2_farmer_walking_1789046594509.jpg')
shot3 = os.path.join(IMG_DIR, 'shot3_hands_inspecting_rice_1789046608114.jpg')
shot4 = os.path.join(IMG_DIR, 'shot4_farmer_turning_camera_1789046619820.jpg')
shot5_open = os.path.join(IMG_DIR, 'shot5b_farmer_speaking_open_1789046720134.jpg')
shot5_closed = os.path.join(IMG_DIR, 'shot5c_farmer_speaking_closed_1789046733138.jpg')
shot5_mid = os.path.join(IMG_DIR, 'shot5_farmer_speaking_1789046634109.jpg')
shot6_gesture = os.path.join(IMG_DIR, 'shot6_farmer_gesturing_1789046646225.jpg')
shot7_hero = os.path.join(IMG_DIR, 'shot7_farmer_confident_1789046658672.jpg')
shot8_brand = os.path.join(IMG_DIR, 'shot8_branding_end_card_1789046686375.jpg')

audio_track = os.path.join(VID_DIR, 'kissan_commercial_audio.aac')

def run_cmd(cmd):
    print("Running:", " ".join(cmd[:10]), "...")
    res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    if res.returncode != 0:
        print("ERROR:", res.stderr[-500:])
        raise RuntimeError(f"Command failed with code {res.returncode}")

print("Rendering Scene 1: Wide rice field slow pan & zoom (0.0s - 2.8s)")
clip1 = os.path.join(TMP_DIR, 'clip1.mp4')
run_cmd([
    'ffmpeg', '-y', '-loop', '1', '-i', shot1,
    '-vf', 'scale=1280:720,zoompan=z=\'min(zoom+0.0015,1.18)\':x=\'iw/2-(iw/zoom/2)+sin(on/30)*20\':y=\'ih/2-(ih/zoom/2)\':d=84:s=1280x720:fps=30',
    '-t', '2.8', '-c:v', 'libx264', '-preset', 'veryfast', '-pix_fmt', 'yuv420p', clip1
])

print("Rendering Scene 2: Farmer walking smoothly in rice field (2.8s - 5.6s)")
clip2 = os.path.join(TMP_DIR, 'clip2.mp4')
run_cmd([
    'ffmpeg', '-y', '-loop', '1', '-i', shot2,
    '-vf', 'scale=1280:720,zoompan=z=\'min(zoom+0.0018,1.20)\':x=\'iw/2-(iw/zoom/2)-sin(on/25)*15\':y=\'ih/2-(ih/zoom/2)+sin(on/20)*10\':d=84:s=1280x720:fps=30',
    '-t', '2.8', '-c:v', 'libx264', '-preset', 'veryfast', '-pix_fmt', 'yuv420p', clip2
])

print("Rendering Scene 3: Extreme close-up hands checking rice (5.6s - 7.6s)")
clip3 = os.path.join(TMP_DIR, 'clip3.mp4')
run_cmd([
    'ffmpeg', '-y', '-loop', '1', '-i', shot3,
    '-vf', 'scale=1280:720,zoompan=z=\'min(zoom+0.0014,1.15)\':x=\'iw/2-(iw/zoom/2)+on*0.3\':y=\'ih/2-(ih/zoom/2)\':d=60:s=1280x720:fps=30',
    '-t', '2.0', '-c:v', 'libx264', '-preset', 'veryfast', '-pix_fmt', 'yuv420p', clip3
])

print("Rendering Scene 4: Farmer stops and turns to camera (7.6s - 9.0s)")
clip4 = os.path.join(TMP_DIR, 'clip4.mp4')
run_cmd([
    'ffmpeg', '-y', '-loop', '1', '-i', shot4,
    '-vf', 'scale=1280:720,zoompan=z=\'min(zoom+0.0022,1.18)\':x=\'iw/2-(iw/zoom/2)\':y=\'ih/2-(ih/zoom/2)\':d=42:s=1280x720:fps=30',
    '-t', '1.4', '-c:v', 'libx264', '-preset', 'veryfast', '-pix_fmt', 'yuv420p', clip4
])

print("Rendering Scene 5: Speaking with Lip-Sync Part 1 (9.0s - 14.8s)")
# Alternating open / mid / closed mouth frames synchronized with speech cadence (each phoneme ~0.2-0.3s)
speech_frames_1 = [
    (shot5_open, 0.35),
    (shot5_closed, 0.25),
    (shot5_mid, 0.35),
    (shot5_open, 0.40),
    (shot5_closed, 0.25),
    (shot5_mid, 0.35),
    (shot5_open, 0.45),
    (shot5_closed, 0.30),
    (shot5_mid, 0.40),
    (shot5_open, 0.40),
    (shot5_closed, 0.30),
    (shot5_mid, 0.40),
    (shot5_open, 0.45),
    (shot5_closed, 0.30),
    (shot5_mid, 0.40),
    (shot5_open, 0.45),
]
concat1_txt = os.path.join(TMP_DIR, 'concat_speech1.txt')
with open(concat1_txt, 'w') as f:
    for img_p, dur in speech_frames_1:
        f.write(f"file '{img_p}'\n")
        f.write(f"duration {dur}\n")
    f.write(f"file '{speech_frames_1[-1][0]}'\n")

clip5 = os.path.join(TMP_DIR, 'clip5.mp4')
run_cmd([
    'ffmpeg', '-y', '-f', 'concat', '-safe', '0', '-i', concat1_txt,
    '-vf', 'scale=1280:720,fps=30,format=yuv420p',
    '-t', '5.8', '-c:v', 'libx264', '-preset', 'veryfast', clip5
])

print("Rendering Scene 6: Speaking & Gesturing Part 2 (14.8s - 20.6s)")
speech_frames_2 = [
    (shot6_gesture, 0.50),
    (shot5_open, 0.35),
    (shot6_gesture, 0.45),
    (shot5_closed, 0.25),
    (shot5_mid, 0.35),
    (shot6_gesture, 0.55),
    (shot5_open, 0.40),
    (shot6_gesture, 0.50),
    (shot5_closed, 0.25),
    (shot5_mid, 0.40),
    (shot6_gesture, 0.60),
    (shot5_open, 0.45),
    (shot6_gesture, 0.75),
]
concat2_txt = os.path.join(TMP_DIR, 'concat_speech2.txt')
with open(concat2_txt, 'w') as f:
    for img_p, dur in speech_frames_2:
        f.write(f"file '{img_p}'\n")
        f.write(f"duration {dur}\n")
    f.write(f"file '{speech_frames_2[-1][0]}'\n")

clip6 = os.path.join(TMP_DIR, 'clip6.mp4')
run_cmd([
    'ffmpeg', '-y', '-f', 'concat', '-safe', '0', '-i', concat2_txt,
    '-vf', 'scale=1280:720,fps=30,format=yuv420p',
    '-t', '5.8', '-c:v', 'libx264', '-preset', 'veryfast', clip6
])

print("Rendering Scene 7: Hero smiling Pakistani farmer standing proud (20.6s - 23.5s)")
clip7 = os.path.join(TMP_DIR, 'clip7.mp4')
run_cmd([
    'ffmpeg', '-y', '-loop', '1', '-i', shot7_hero,
    '-vf', 'scale=1280:720,zoompan=z=\'if(lte(zoom,1.0),1.15,max(1.0,zoom-0.0016))\':x=\'iw/2-(iw/zoom/2)\':y=\'ih/2-(ih/zoom/2)\':d=87:s=1280x720:fps=30',
    '-t', '2.9', '-c:v', 'libx264', '-preset', 'veryfast', '-pix_fmt', 'yuv420p', clip7
])

print("Rendering Scene 8: Branding End Card (23.5s - 26.5s)")
clip8 = os.path.join(TMP_DIR, 'clip8.mp4')
run_cmd([
    'ffmpeg', '-y', '-loop', '1', '-i', shot8_brand,
    '-vf', 'scale=1280:720,zoompan=z=\'min(zoom+0.0010,1.10)\':x=\'iw/2-(iw/zoom/2)\':y=\'ih/2-(ih/zoom/2)\':d=90:s=1280x720:fps=30',
    '-t', '3.0', '-c:v', 'libx264', '-preset', 'veryfast', '-pix_fmt', 'yuv420p', clip8
])

print("Combining all video clips with audio...")
all_clips_txt = os.path.join(TMP_DIR, 'all_clips.txt')
with open(all_clips_txt, 'w') as f:
    for c in [clip1, clip2, clip3, clip4, clip5, clip6, clip7, clip8]:
        f.write(f"file '{c}'\n")

final_video = os.path.join(VID_DIR, 'kissan_farming_commercial.mp4')

run_cmd([
    'ffmpeg', '-y', '-f', 'concat', '-safe', '0', '-i', all_clips_txt,
    '-i', audio_track,
    '-c:v', 'copy',
    '-c:a', 'aac',
    '-b:a', '192k',
    '-shortest',
    final_video
])

print("DONE! Video generated successfully at:", final_video)
